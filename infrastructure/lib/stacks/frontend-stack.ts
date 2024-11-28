import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import { Construct } from 'constructs';

interface FrontendStackProps extends cdk.StackProps {
  domainName: string;
  environment: string;
}

export class FrontendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: FrontendStackProps) {
    super(scope, id, props);

    // Create an S3 bucket to store the website files
    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      bucketName: `${props.domainName}-${props.environment}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // Get the hosted zone for the domain
    const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {
      domainName: props.domainName,
    });

    // Create an SSL certificate
    const certificate = new acm.DnsValidatedCertificate(this, 'SiteCertificate', {
      domainName: props.domainName,
      hostedZone,
      region: 'us-east-1', // CloudFront requires certificates in us-east-1
    });

    // Create a CloudFront distribution
    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
      domainNames: [props.domainName],
      certificate,
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
    });

    // Create Route53 alias record
    new route53.ARecord(this, 'SiteAliasRecord', {
      recordName: props.domainName,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
      zone: hostedZone,
    });

    // Output the CloudFront URL
    new cdk.CfnOutput(this, 'DistributionUrl', {
      value: distribution.distributionDomainName,
    });
  }
} 
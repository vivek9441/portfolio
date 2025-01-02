import * as cdk from "aws-cdk-lib";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as ses from "aws-cdk-lib/aws-ses";
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";
import * as lambdaCore from "aws-cdk-lib/aws-lambda";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { EmailStackProps } from "../types/stack-props";
import * as path from "path";

export class EmailStack extends cdk.Stack {
  public readonly emailFunction: lambda.NodejsFunction;

  constructor(scope: Construct, id: string, props: EmailStackProps) {
    super(scope, id, props);

    // Create SES Domain Identity
    const domainIdentity = new ses.EmailIdentity(this, "DomainIdentity", {
      identity: ses.Identity.domain(props.domainName),
    });

    // Create DNS TXT record for domain verification
    new route53.TxtRecord(this, "SESVerificationRecord", {
      zone: props.hostedZone,
      recordName: `_amazonses.${props.domainName}`,
      values: [domainIdentity.emailIdentityName],
      ttl: cdk.Duration.hours(1),
    });

    // Create DKIM CNAME records
    for (let i = 1; i <= 3; i++) {
      new route53.CnameRecord(this, `DkimRecord${i}`, {
        zone: props.hostedZone,
        recordName: `${i}._domainkey.${props.domainName}`,
        domainName: `${i}.dkim.amazonses.${this.region}.amazonaws.com`,
        ttl: cdk.Duration.hours(1),
      });
    }

    // Create MX record for receiving email
    new route53.MxRecord(this, "SESMxRecord", {
      zone: props.hostedZone,
      values: [
        {
          hostName: `inbound-smtp.${this.region}.amazonaws.com`,
          priority: 10,
        },
      ],
      ttl: cdk.Duration.hours(1),
    });

    // Create Lambda function for email processing
    this.emailFunction = new lambda.NodejsFunction(
      this,
      "ContactFormFunction",
      {
        runtime: lambdaCore.Runtime.NODEJS_20_X,
        handler: "handler",
        entry: path.join(__dirname, "../functions/contact-form/index.ts"),
        environment: {
          SENDER_EMAIL: `no-reply@${props.domainName}`,
          RECIPIENT_EMAIL: "bjornmelin16@gmail.com",
          REGION: this.region,
        },
        bundling: {
          minify: true,
          sourceMap: true,
          externalModules: [
            "@aws-sdk/client-ses", // Available in the Lambda runtime
          ],
        },
        timeout: cdk.Duration.seconds(10),
        memorySize: 128,
        architecture: lambdaCore.Architecture.ARM_64,
        tracing: lambdaCore.Tracing.ACTIVE, // Enable X-Ray tracing
      }
    );

    // Create custom policy for SES permissions
    const sesPolicy = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ["ses:SendEmail", "ses:SendRawEmail"],
      resources: [
        `arn:aws:ses:${this.region}:${this.account}:identity/${props.domainName}`,
      ],
    });

    // Attach the SES policy to the Lambda function
    this.emailFunction.addToRolePolicy(sesPolicy);

    // Stack outputs
    new cdk.CfnOutput(this, "EmailFunctionArn", {
      value: this.emailFunction.functionArn,
      description: "Contact Form Lambda Function ARN",
      exportName: `${props.environment}-email-function-arn`,
    });

    new cdk.CfnOutput(this, "EmailDomainIdentityName", {
      value: domainIdentity.emailIdentityName,
      description: "SES Domain Identity Name",
      exportName: `${props.environment}-ses-domain-identity-name`,
    });

    new cdk.CfnOutput(this, "SenderEmailAddress", {
      value: `no-reply@${props.domainName}`,
      description: "Sender Email Address",
      exportName: `${props.environment}-sender-email`,
    });
  }
}

import * as cdk from "aws-cdk-lib";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";
import { Construct } from "constructs";
import { MonitoringStackProps } from "../types/stack-props";

export class MonitoringStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: MonitoringStackProps) {
    super(scope, id, props);

    // CloudFront error rate alarm
    const availability = new cloudwatch.Metric({
      namespace: "AWS/CloudFront",
      metricName: "5xxErrorRate",
      dimensionsMap: {
        DistributionId: props.distribution.distributionId,
        Region: "Global",
      },
      statistic: "Average",
      period: cdk.Duration.minutes(5),
    });

    new cloudwatch.Alarm(this, "HighErrorRate", {
      metric: availability,
      threshold: 5,
      evaluationPeriods: 2,
      alarmDescription: "High error rate detected in CloudFront distribution",
    });

    // S3 error monitoring
    const bucketMetrics = new cloudwatch.Metric({
      namespace: "AWS/S3",
      metricName: "4xxErrors",
      dimensionsMap: {
        BucketName: props.bucket.bucketName,
      },
      statistic: "Sum",
      period: cdk.Duration.minutes(5),
    });

    new cloudwatch.Alarm(this, "HighBucketErrors", {
      metric: bucketMetrics,
      threshold: 10,
      evaluationPeriods: 2,
      alarmDescription: "High error rate detected in S3 bucket",
    });
  }
}

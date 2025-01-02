import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { DeploymentStackProps } from "../types/stack-props";

export class DeploymentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: DeploymentStackProps) {
    super(scope, id, props);

    // GitHub Actions deployment user
    const deploymentUser = new iam.User(this, "GithubActionsDeployment", {
      userName: `${props.environment}-portfolio-deployment-user`,
    });

    // Deployment policy
    const deploymentPolicy = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        "s3:PutObject",
        "s3:GetObject",
        "s3:ListBucket",
        "s3:DeleteObject",
        "cloudfront:CreateInvalidation",
        "cloudformation:DescribeStacks",
      ],
      resources: [
        props.bucket.bucketArn,
        `${props.bucket.bucketArn}/*`,
        `arn:aws:cloudfront::${this.account}:distribution/${props.distribution.distributionId}`,
        `arn:aws:cloudformation:${this.region}:${this.account}:stack/${this.stackName}/*`,
      ],
    });

    // Attach policy to user
    deploymentUser.addToPolicy(deploymentPolicy);

    // Create access key for GitHub Actions
    const accessKey = new iam.CfnAccessKey(this, "DeploymentUserAccessKey", {
      userName: deploymentUser.userName,
    });

    // Outputs
    new cdk.CfnOutput(this, "DeploymentUserAccessKeyId", {
      value: accessKey.ref,
      description: "AWS access key ID for GitHub Actions",
    });

    new cdk.CfnOutput(this, "DeploymentUserSecretAccessKey", {
      value: accessKey.attrSecretAccessKey,
      description: "AWS secret access key for GitHub Actions",
    });
  }
}

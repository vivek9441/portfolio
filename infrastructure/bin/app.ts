#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FrontendStack } from '../lib/stacks/frontend-stack';

const app = new cdk.App();

// Development environment
new FrontendStack(app, 'BjornmelinFrontendDev', {
  domainName: 'dev.bjornmelin.io',
  environment: 'dev',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

// Production environment
new FrontendStack(app, 'BjornmelinFrontendProd', {
  domainName: 'bjornmelin.io',
  environment: 'prod',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
}); 
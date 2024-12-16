#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FrontendStack } from '../lib/stacks/frontend-stack';
import { CONFIG } from '../lib/constants';

const app = new cdk.App();

// Development stack
new FrontendStack(app, 'DevFrontendStack', {
  domainName: CONFIG.dev.domainName,
  environment: CONFIG.dev.environment,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  tags: CONFIG.tags,
});

// Production stack
new FrontendStack(app, 'ProdFrontendStack', {
  domainName: CONFIG.prod.domainName,
  environment: CONFIG.prod.environment,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  tags: CONFIG.tags,
}); 
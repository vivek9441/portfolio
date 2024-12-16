export const CONFIG = {
  dev: {
    domainName: 'dev.bjornmelin.io',
    environment: 'dev' as const,
  },
  prod: {
    domainName: 'bjornmelin.io',
    environment: 'prod' as const,
  },
  tags: {
    Project: 'Portfolio',
    ManagedBy: 'CDK',
    Owner: 'Bjorn Melin'
  },
}; 
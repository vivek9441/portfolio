# AWS Services Documentation

## Core Services

### Global Edge Network

- **CloudFront**

  - Global content delivery network
  - Edge computing capabilities
  - Integration with WAF
  - Custom domain support
  - SSL/TLS certificate management

- **WAF (Web Application Firewall)**
  - DDoS protection
  - SQL injection prevention
  - Cross-site scripting (XSS) protection
  - Rate limiting
  - Geo-restriction capabilities

### Compute Services

#### Lambda

- **Use Cases**
  - API endpoints
  - Background jobs
  - Event processing
  - Edge computing
- **Features**
  - Event-driven execution
  - Multiple runtime support
  - VPC integration
  - Auto-scaling
  - Pay-per-use pricing

#### ECS (Elastic Container Service)

- **Use Cases**
  - Long-running services
  - Background workers
  - Microservices
- **Features**
  - Fargate serverless runtime
  - Auto-scaling
  - Load balancing
  - Container orchestration
  - Service discovery

### Storage Services

#### S3 (Simple Storage Service)

- **Use Cases**
  - Static website hosting
  - Asset storage
  - User uploads
  - Data lake storage
- **Features**
  - Versioning
  - Lifecycle policies
  - CDN integration
  - Server-side encryption
  - Access control

#### DynamoDB

- **Use Cases**
  - User data storage
  - Session management
  - Application state
  - Real-time data
- **Features**
  - Global tables
  - Auto-scaling
  - Point-in-time recovery
  - Streams
  - Backup/restore

### Security Services

#### Cognito

- **Features**
  - User pools
  - Identity pools
  - Social identity providers
  - MFA support
  - OAuth 2.0 flows
  - Token management

#### Secrets Manager

- **Features**
  - Secret rotation
  - Fine-grained access control
  - Encryption at rest
  - Audit logging
  - Version management

### Developer Tools

#### CodeBuild

- CI/CD build processes
- Multiple environment support
- Custom build containers
- Build caching

#### CodePipeline

- Deployment automation
- Multi-stage pipelines
- Source integration
- Manual approval actions

#### CloudWatch

- Metrics and monitoring
- Log aggregation
- Alerting
- Dashboards
- Anomaly detection

#### X-Ray

- Distributed tracing
- Service maps
- Performance insights
- Error tracking

### Network Services

#### Route53

- **Features**
  - DNS management
  - Routing policies
  - Health checks
  - Domain registration
  - Global DNS

#### ACM (AWS Certificate Manager)

- **Features**
  - SSL/TLS certificate management
  - Automatic renewal
  - Integration with CloudFront
  - Domain validation

### Additional Storage Services

#### EFS (Elastic File System)

- **Use Cases**
  - Container storage
  - Shared file systems
  - Persistent storage
- **Features**
  - Auto-scaling
  - Multi-AZ access
  - Encryption at rest
  - Lifecycle management

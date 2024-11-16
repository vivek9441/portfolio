# 🏗️ bjornmelin-platform-io

Cloud-native portfolio platform powering bjornmelin.io. Demonstrates AWS solutions architecture through microservices, serverless APIs, and infrastructure as code. Built with Next.js, AWS CDK, and modern DevOps practices.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)
[![AWS SAA](https://img.shields.io/badge/AWS-Solutions%20Architect%20Associate-FF9900?logo=amazon-aws)](https://www.credly.com/org/amazon-web-services/badge/aws-certified-solutions-architect-associate)
[![AWS DVA](https://img.shields.io/badge/AWS-Developer%20Associate-FF9900?logo=amazon-aws)](https://www.credly.com/org/amazon-web-services/badge/aws-certified-developer-associate)
[![AWS CCP](https://img.shields.io/badge/AWS-Cloud%20Practitioner-FF9900?logo=amazon-aws)](https://www.credly.com/org/amazon-web-services/badge/aws-certified-cloud-practitioner)
[![GitHub](https://img.shields.io/badge/GitHub-BjornMelin-181717?logo=github)](https://github.com/BjornMelin)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Bjorn%20Melin-0077B5?logo=linkedin)](https://www.linkedin.com/in/bjorn-melin/)

## 🌟 Features

- 🏗️ **Cloud Native Architecture**: Production-grade AWS infrastructure with CDK
- 🔐 **Enterprise Security**: Zero-trust architecture with AWS Cognito
- 🚀 **CI/CD Pipeline**: Automated deployments with GitHub Actions
- 📊 **Observability**: Comprehensive monitoring and logging
- 🔄 **Multi-Environment**: Development, staging, and production
- 🛡️ **Infrastructure as Code**: Complete AWS CDK implementation
- 📱 **Modern Frontend**: Next.js with Tailwind CSS
- 🌐 **Global Delivery**: CloudFront CDN integration

## 📚 Quick Links

- [🚀 Getting Started](#-getting-started)
- [🏛️ Architecture](#️-architecture)
- [💻 Development](#-development)
- [🏗️ Infrastructure](#️-infrastructure)
- [👨‍💻 Author](#-author)
- [📜 License](#-license)
- [🌟 Star History](#-star-history)
- [🙏 Acknowledgments](#-acknowledgments)

## 🚀 Getting Started

1. **Initial Setup**

   ```bash
   # Clone repository
   git clone https://github.com/bjornmelin/bjornmelin-platform-io.git
   cd bjornmelin-platform-io

   # Install dependencies
   npm install

   # Configure environment
   cp .env.example .env
   ```

2. **Infrastructure Deployment**

   ```bash
   # Deploy base infrastructure
   cd infrastructure
   npm run cdk deploy
   ```

3. **Local Development**
   ```bash
   # Start frontend
   cd frontend && npm run dev

   # Start API
   cd services/api && npm run dev
   ```

## 🏛️ Architecture

### Project Structure

```bash
bjornmelin-platform-io/
├── infrastructure/   # CDK infrastructure code
├── frontend/        # Next.js portfolio site
├── services/        # Microservices
│   ├── auth/       # Authentication service
│   └── api/        # Main API service
└── docs/           # Documentation
```

### Core Components

- **Frontend**: Next.js static site hosted on S3/CloudFront
- **Authentication**: Custom Cognito service with social providers
- **API Gateway**: Centralized API management
- **Services**: Event-driven microservices architecture
- **Database**: DynamoDB with global tables
- **CDN**: CloudFront with global edge locations
- **Monitoring**: CloudWatch with custom dashboards

## 💻 Development

### Environment Setup

```bash
# Development deployment
npm run deploy:dev

# Production deployment
npm run deploy:prod

# Run tests
npm run test:all
```

### Available Scripts

- `npm run deploy:base` - Deploy base infrastructure
- `npm run deploy:frontend` - Deploy frontend application
- `npm run deploy:auth` - Deploy authentication service
- `npm run deploy:api` - Deploy API service

## 🏗️ Infrastructure

### AWS Services

- **Compute**: Lambda, ECS Fargate
- **Storage**: S3, DynamoDB
- **Networking**: CloudFront, API Gateway
- **Security**: Cognito, WAF, KMS
- **DevOps**: CodeBuild, CodePipeline

## 👨‍💻 Author

### Bjorn Melin

[![AWS Certified Solutions Architect](https://images.credly.com/size/110x110/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png)](https://www.credly.com/org/amazon-web-services/badge/aws-certified-solutions-architect-associate)
[![AWS Certified Developer](https://images.credly.com/size/110x110/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png)](https://www.credly.com/org/amazon-web-services/badge/aws-certified-developer-associate)
[![AWS Certified Cloud Practitioner](https://images.credly.com/size/110x110/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png)](https://www.credly.com/org/amazon-web-services/badge/aws-certified-cloud-practitioner)

AWS-certified Solutions Architect and Developer with expertise in cloud architecture and modern development practices. Connect with me on:

- [GitHub](https://github.com/BjornMelin)
- [LinkedIn](https://www.linkedin.com/in/bjorn-melin/)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=bjornmelin/bjornmelin-platform-io&type=Date)](https://star-history.com/#bjornmelin/bjornmelin-platform-io&Date)

## 🙏 Acknowledgments

- AWS Documentation and Best Practices
- AWS CDK Patterns Community
- Next.js Documentation

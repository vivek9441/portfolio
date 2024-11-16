# API Overview

The bjornmelin-platform-io API is built on AWS Lambda with Edge capabilities, using tRPC for end-to-end type safety.

## Architecture

- Edge-optimized API Gateway endpoints
- Lambda functions with Edge Runtime
- DynamoDB for data persistence
- Cognito for authentication
- End-to-end type safety with tRPC

## Contents

- [Authentication](./authentication.md)
- [Portfolio](./portfolio.md)
- [Schemas](./schemas.md)

## Base URL

```plaintext
Production: https://api.bjornmelin.io/v1
Staging: https://api.staging.bjornmelin.io/v1
Development: http://localhost:3000/api/v1
```

## Rate Limiting

| Environment | Authenticated | Unauthenticated |
| ----------- | ------------- | --------------- |
| Production  | 1000/min      | 100/min         |
| Staging     | 200/min       | 50/min          |
| Development | Unlimited     | Unlimited       |

## Error Handling

All API responses follow a consistent format:

```typescript
{
  error?: {
    code: string;      // Error identifier
    message: string;   // Human-readable message
    details?: object;  // Additional context
  },
  data?: T;           // Success response data
}
```

### Common Status Codes

- `200`: Success
- `201`: Resource Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `429`: Rate Limited
- `500`: Server Error

## API Versioning

- Current version: `v1`
- Version in URL path: `/v1/`
- Older versions supported for 6 months
- Version sunset notifications via response headers

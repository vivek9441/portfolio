# Authentication Endpoints

This section covers the authentication endpoints available in the API. All authentication is handled through AWS Cognito with JWT tokens.

## Endpoints

### POST /auth/login

Authenticate a user and return a token.

**Request Body:**

```typescript
{
  email: string;
  password: string;
}
```

**Response:**

```typescript
{
  data: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    tokenType: "Bearer";
  }
}
```

### POST /auth/register

Register a new user.

**Request Body:**

```typescript
{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
```

**Response:**

```typescript
{
  data: {
    userId: string;
    email: string;
    verificationRequired: boolean;
  }
}
```

### POST /auth/refresh

Refresh an existing authentication token.

**Request Body:**

```typescript
{
  refreshToken: string;
}
```

**Response:**

```typescript
{
  data: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }
}
```

### POST /auth/logout

Invalidate the current session.

**Request Headers:**

```
Authorization: Bearer <token>
```

**Response:**

```typescript
{
  data: {
    success: true;
  }
}
```

## Error Responses

Authentication endpoints may return the following error codes:

- `401`: Invalid credentials
- `403`: Account locked or requires verification
- `422`: Invalid input data
- `429`: Too many attempts

## Rate Limiting

Authentication endpoints have special rate limiting rules:

- Login: 5 attempts per minute
- Register: 3 attempts per minute
- Refresh: 10 attempts per minute

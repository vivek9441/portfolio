# Data Schemas

This section provides the data schemas used in the API. All data validation is performed using Zod.

## User Schema

```typescript
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  role: "user" | "admin";
  status: "active" | "inactive" | "pending";
}
```

## Portfolio Schema

```typescript
interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  images: {
    url: string;
    alt: string;
  }[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  createdAt: string;
  updatedAt: string;
  userId: string;
}
```

## Authentication Schemas

### Login Request

```typescript
interface LoginRequest {
  email: string;
  password: string;
}
```

### Registration Request

```typescript
interface RegistrationRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
```

### Token Response

```typescript
interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: "Bearer";
}
```

## Error Schema

```typescript
interface APIError {
  error: {
    code: string;
    message: string;
    details?: Record<string, any>;
  };
}
```

## Validation Rules

All schemas are validated using Zod with the following rules:

### User

- Email: Valid email format
- Password: Min 8 chars, 1 uppercase, 1 number
- Names: 2-50 chars, letters only

### Portfolio

- Title: 3-100 chars
- Description: Max 2000 chars
- Category: Must match predefined list
- URLs: Valid URL format
- Images: Max 10 per item

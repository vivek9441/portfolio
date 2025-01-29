# Data Schemas

This document outlines the data schemas used throughout the application.

## API Schemas

### Contact Form Schema

Located in `src/lib/schemas/contact.ts`:

```typescript
// Contact form request validation schema
{
  name: string; // Required, sender's name
  email: string; // Required, valid email format
  message: string; // Required, message content
}
```

## Data Models

### Project Type

Located in `src/types/project.ts`:

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  tags: string[];
}
```

## Static Data Types

Located in `src/data/`:

### Certifications

```typescript
interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
}
```

### Experience

```typescript
interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
}
```

### Education

```typescript
interface Education {
  school: string;
  degree: string;
  field: string;
  graduationDate: string;
}
```

### Skills

```typescript
interface Skill {
  category: string;
  items: string[];
}
```

## Validation

All schemas use Zod for runtime type checking and validation. Example:

```typescript
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
```

## Environment Variables

Type-safe environment variables are defined in `src/env.mjs`:

```typescript
// Environment variable schema
{
  AWS_REGION: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  // ... other environment variables
}
```

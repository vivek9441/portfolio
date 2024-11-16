# Portfolio Endpoints

This section covers the portfolio endpoints available in the API. All portfolio endpoints require authentication except for public GET requests.

## Endpoints

### GET /portfolio

Retrieve the portfolio data.

**Query Parameters:**

```typescript
{
  limit?: number;      // Default: 20
  offset?: number;     // Default: 0
  sort?: 'asc' | 'desc'; // Default: 'desc'
  category?: string;
}
```

**Response:**

```typescript
{
  data: {
    items: Array<PortfolioItem>;
    total: number;
    hasMore: boolean;
  }
}
```

### POST /portfolio

Create a new portfolio entry. Requires authentication.

**Request Headers:**

```
Authorization: Bearer <token>
```

**Request Body:**

```typescript
{
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
}
```

### PUT /portfolio/{id}

Update an existing portfolio entry. Requires authentication.

**Path Parameters:**

- `id`: Portfolio entry ID

**Request Headers:**

```
Authorization: Bearer <token>
```

**Request Body:**

```typescript
{
  title?: string;
  description?: string;
  category?: string;
  technologies?: string[];
  images?: {
    url: string;
    alt: string;
  }[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}
```

### DELETE /portfolio/{id}

Delete a portfolio entry. Requires authentication.

**Path Parameters:**

- `id`: Portfolio entry ID

**Request Headers:**

```
Authorization: Bearer <token>
```

## Error Responses

Portfolio endpoints may return:

- `400`: Invalid request data
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Entry not found
- `422`: Validation error

## Caching

GET requests are cached at the edge for 5 minutes for unauthenticated users.

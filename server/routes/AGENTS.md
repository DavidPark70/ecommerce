# AGENTS.md - Routes

## Purpose
Express route handlers defining the REST API endpoints.

## Route Files

### auth.js
Authentication endpoints (no auth required).
- `POST /register` - Create new user account
  - Body: `{ username, email, password }`
  - Response: `{ message }`
  - Password hashed with bcryptjs

- `POST /login` - Authenticate user
  - Body: `{ email, password }`
  - Response: `{ token }`
  - Returns JWT token (1 hour expiry)

### products.js
Product catalog endpoints.
- `GET /` - List all products
- `GET /:id` - Get single product
- `POST /` - Create product (requires auth)
- `PUT /:id` - Update product (requires auth)
- `DELETE /:id` - Delete product (requires auth)

### orders.js
Order management endpoints (all require auth).
- `GET /` - Get current user's orders
  - Includes OrderItems and Product details
- `POST /` - Create new order
  - Body: `{ items: [{ productId, quantity }] }`
  - Validates stock availability
  - Decrements product stock
  - Captures product prices at time of order

## Authentication
Protected routes use the `auth` middleware which:
- Expects `Authorization: Bearer <token>` header
- Validates JWT token
- Attaches user to `req.user`

## Error Handling
All routes return structured error responses:
```json
{
  "message": "Error description",
  "error": "Detailed error message"
}
```

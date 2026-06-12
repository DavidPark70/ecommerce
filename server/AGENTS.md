# AGENTS.md - Server

## Purpose
Express.js backend API server for the e-commerce application.

## Architecture
- **config/** - Database connection and configuration
- **middleware/** - Express middleware (authentication)
- **migrations/** - Database schema migrations
- **models/** - Sequelize ORM models
- **routes/** - API route handlers

## API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Register new user
- `POST /login` - Login and receive JWT token

### Products (`/api/products`)
- `GET /` - Get all products
- `GET /:id` - Get product by ID
- `POST /` - Create product (requires auth)
- `PUT /:id` - Update product (requires auth)
- `DELETE /:id` - Delete product (requires auth)

### Orders (`/api/orders`)
- `GET /` - Get user's orders (requires auth)
- `POST /` - Create new order (requires auth)

## Database
- PostgreSQL with Sequelize ORM
- Tables: Users, Products, Orders, OrderItems

## Environment Variables
- `PORT` - Server port (default: 5000)
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT tokens

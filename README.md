# Ecommerce Website

A full-stack ecommerce website built with React, Node.js, and Amazon RDS (PostgreSQL).

## Features

- User authentication (register/login)
- Product catalog
- Shopping cart
- Checkout and order placement

## Setup

### Backend

1. Navigate to the `server` directory.
2. Copy `.env.example` to `.env` and fill in your database credentials.
3. Run `npm install`
4. Run `npm run dev` to start the server.

### Frontend

1. Navigate to the `client` directory.
2. Run `npm install`
3. Run `npm start` to start the React app.

## Database

The application uses PostgreSQL. Set up your Amazon RDS instance and update the `DATABASE_URL` in `.env`.

Tables: Users, Products, Orders, OrderItems.

## API Endpoints

- POST /api/auth/register
- POST /api/auth/login
- GET /api/products
- POST /api/products (auth required)
- GET /api/orders (auth required)
- POST /api/orders (auth required)
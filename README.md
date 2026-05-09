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

The application uses PostgreSQL. Set up your Amazon RDS instance and update the `DATABASE_URL` in `server/.env`.

Example `server/.env`:

```env
DATABASE_URL=postgresql://username:password@host:5432/database
JWT_SECRET=your_jwt_secret
```

### Migrations

This project uses Sequelize migrations for schema management.

From the `server` folder, run:

```bash
export DATABASE_URL=postgresql://username:password@host:5432/database
npx sequelize-cli db:migrate
```

That command:

- connects to the configured PostgreSQL database
- runs the migration files in `server/migrations`
- creates the tables in the correct order
- records applied migrations in the `SequelizeMeta` table

### What DevOps should do

1. Provision the RDS PostgreSQL instance.
2. Create the empty database.
3. Provide the application with the `DATABASE_URL`.
4. Run the migration command or include it in the deployment pipeline.

Tables created by migrations: Users, Products, Orders, OrderItems.

## API Endpoints

- POST /api/auth/register
- POST /api/auth/login
- GET /api/products
- POST /api/products (auth required)
- GET /api/orders (auth required)
- POST /api/orders (auth required)
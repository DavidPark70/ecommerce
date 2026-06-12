# AGENTS.md - Migrations

## Purpose
Database schema migration files using Sequelize.

## Migration Files
- **20260508235942-create-users.js** - Create Users table
- **20260509000021-create-products.js** - Create Products table
- **20260509000021-create-orders.js** - Create Orders table
- **20260509000021-create-order-items.js** - Create OrderItems table

## Database Schema

### Users
- id (INTEGER, PK, auto-increment)
- username (STRING, unique, not null)
- email (STRING, unique, not null)
- password (STRING, not null, hashed)

### Products
- id (INTEGER, PK, auto-increment)
- name (STRING, not null)
- description (TEXT)
- price (DECIMAL(10,2), not null)
- imageUrl (STRING)
- stock (INTEGER, default: 0)

### Orders
- id (INTEGER, PK, auto-increment)
- userId (INTEGER, FK → Users)
- total (DECIMAL(10,2), not null)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)

### OrderItems
- id (INTEGER, PK, auto-increment)
- orderId (INTEGER, FK → Orders)
- productId (INTEGER, FK → Products)
- quantity (INTEGER, not null)
- price (DECIMAL(10,2), not null)

## Running Migrations
```bash
# Run pending migrations
npx sequelize-cli db:migrate

# Undo last migration
npx sequelize-cli db:migrate:undo
```

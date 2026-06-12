# AGENTS.md - Config

## Purpose
Configuration files related to database and application settings.

## Files
- **database.js** - Sequelize database connection setup using PostgreSQL

## Database Connection
- Uses Sequelize ORM to connect to PostgreSQL
- Connection string from `DATABASE_URL` environment variable
- Dialect: postgres
- Logging disabled for production

## Usage
```javascript
const sequelize = require('./config/database');

// Authenticate connection
await sequelize.authenticate();

// Sync models (development only)
await sequelize.sync();
```

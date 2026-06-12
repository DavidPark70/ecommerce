# AGENTS.md - Project Root

## Overview
This is a full-stack e-commerce application with a Node.js/Express backend (with PostgreSQL) and a client-side frontend.

## Project Structure
- **client/** - Frontend application (currently empty, to be implemented)
- **server/** - Backend Express.js API with PostgreSQL database
- **.github/** - GitHub configuration

## Quick Start
1. Install dependencies: `npm install` (in both root and server/)
2. Set up environment variables (copy `.env.example`)
3. Run database migrations
4. Start server: `node server/server.js`

## Key Technologies
- Backend: Express.js, Sequelize ORM, PostgreSQL
- Authentication: JWT, bcryptjs
- API: RESTful endpoints for auth, products, orders

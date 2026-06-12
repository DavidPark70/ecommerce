# AGENTS.md - Middleware

## Purpose
Express middleware functions for request processing and authentication.

## Files
- **auth.js** - JWT authentication middleware

## Authentication Middleware
Protects routes requiring user authentication.

### Usage
```javascript
const auth = require('../middleware/auth');

// Protect a route
router.get('/protected', auth, (req, res) => {
  // req.user contains decoded token payload (id, email)
  res.send('Protected content');
});
```

### How It Works
1. Extracts JWT token from `Authorization` header (Bearer token)
2. Verifies token with `JWT_SECRET`
3. Attaches decoded user info to `req.user`
4. Returns 401 if no token or invalid token

## Token Format
Header: `Authorization: Bearer <token>`

Payload includes: `{ id, email }`

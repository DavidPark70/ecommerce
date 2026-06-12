# AGENTS.md - Models

## Purpose
Sequelize ORM models representing the database schema.

## Models

### index.js
Aggregates all models and sets up associations.

### User.js
Represents application users.
- Fields: id (PK), username, email, password (hashed)
- Authentication uses bcryptjs for password hashing

### Product.js
Represents products in the catalog.
- Fields: id (PK), name, description, price, imageUrl, stock
- Stock available for order processing

### Order.js
Represents customer orders.
- Fields: id (PK), userId (FK → User), total
- Has many OrderItems
- Total calculated from sum of order items

### OrderItem.js
Represents items within an order.
- Fields: id (PK), orderId (FK → Order), productId (FK → Product), quantity, price
- Price captured at time of order (snapshot of product price)

## Associations
- User → hasMany Orders
- Order → belongsTo User
- Order → hasMany OrderItems
- OrderItem → belongsTo Order
- OrderItem → belongsTo Product
- Product → hasMany OrderItems

## Usage Examples
```javascript
// Find user's orders with items and products
const orders = await Order.findAll({
  where: { userId },
  include: [{ model: OrderItem, include: [Product] }]
});

// Create product
const product = await Product.create({
  name, description, price, imageUrl, stock
});
```

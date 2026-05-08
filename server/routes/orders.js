const express = require('express');
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Product = require('../models/Product');
const auth = require('../middleware/auth');

const router = express.Router();

// Get user's orders
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.user.id },
      include: [{ model: OrderItem, include: [Product] }]
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
  }
});

// Create order
router.post('/', auth, async (req, res) => {
  const { items } = req.body; // items: [{ productId, quantity }]
  try {
    let total = 0;
    const orderItems = [];
    for (const item of items) {
      const product = await Product.findByPk(item.productId);
      if (!product || product.stock < item.quantity) {
        return res.status(400).json({ message: 'Insufficient stock or product not found' });
      }
      total += product.price * item.quantity;
      orderItems.push({
        productId: item.productId,
        quantity: item.quantity,
        price: product.price
      });
      // Update stock
      await product.update({ stock: product.stock - item.quantity });
    }
    const order = await Order.create({ userId: req.user.id, total });
    for (const item of orderItems) {
      await OrderItem.create({ ...item, orderId: order.id });
    }
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create order', error: error.message });
  }
});

module.exports = router;
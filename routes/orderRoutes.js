// routes/orderRoutes.js
const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create an order
router.post('/create', async (req, res) => {
    try {
        const { dateOfDelivery } = req.body;

        // Prevent past dates
        if (new Date(dateOfDelivery) < new Date()) {
            return res.status(400).json({ message: 'Past dates are not allowed.' });
        }

        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Search orders by customer name or phone number
router.get('/search', async (req, res) => {
    try {
        const { query } = req.query; // Use query parameter for search
        if (!query) {
            return res.status(400).json({ message: 'Query parameter is required.' });
        }
        const orders = await Order.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { phoneNumber: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

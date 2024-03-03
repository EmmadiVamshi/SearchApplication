// routes/customers.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all customers
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM customers');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching customers', error);
    res.status(500).json({ error: 'Error fetching customers' });
  }
});

// Get a single customer by ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const { rows } = await db.query('SELECT * FROM customers WHERE sno = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching customer', error);
    res.status(500).json({ error: 'Error fetching customer' });
  }
});

// Add a new customer
router.post('/', async (req, res) => {
  const { name, age, phone, location } = req.body;
  try {
    const { rows } = await db.query('INSERT INTO customers (name, age, phone, location) VALUES ($1, $2, $3, $4) RETURNING *', [name, age, phone, location]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error adding customer', error);
    res.status(500).json({ error: 'Error adding customer' });
  }
});

// Update a customer by ID
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, age, phone, location } = req.body;
  try {
    const { rows } = await db.query('UPDATE customers SET name = $1, age = $2, phone = $3, location = $4 WHERE sno = $5 RETURNING *', [name, age, phone, location, id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error updating customer', error);
    res.status(500).json({ error: 'Error updating customer' });
  }
});

// Delete a customer by ID
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const { rows } = await db.query('DELETE FROM customers WHERE sno = $1 RETURNING *', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Error deleting customer', error);
    res.status(500).json({ error: 'Error deleting customer' });
  }
});

module.exports = router;

// app.js or index.js
const express = require('express');
const customersRouter = require('./routes/customers');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Mount the customers routes
app.use('/customers', customersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

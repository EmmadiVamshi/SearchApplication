// src/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

const fetchCustomers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/customers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customers', error);
    return [];
  }
};

export { fetchCustomers };

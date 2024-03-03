// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchCustomers } from './api';
import CustomerTable from './components/CustomerTable';

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCustomers();
      setCustomers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Customer Management App</h1>
      <CustomerTable customers={customers} />
    </div>
  );
}

export default App;

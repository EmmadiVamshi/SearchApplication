// src/components/CustomerTable.js
import React from 'react';

const CustomerTable = ({ customers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(customer => (
          <tr key={customer.sno}>
            <td>{customer.sno}</td>
            <td>{customer.name}</td>
            <td>{customer.age}</td>
            <td>{customer.phone}</td>
            <td>{customer.location}</td>
            <td>{customer.date}</td>
            <td>{customer.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;

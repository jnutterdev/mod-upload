const express = require('express');


module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

   // Create a new Customer
  app.post("/users", customers.create);

  // Retrieve all Customers
  app.get("/users", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/users/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/users/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/users/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/users", customers.deleteAll);
};

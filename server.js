const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3010;

// Middleware
app.use(bodyParser.json());

// In-memory data store
let items = [];

// GET API to retrieve all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST API to add a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// GET API to retrieve a specific item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(item => item.id === id);
  
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// In-memory todo storage
const todos = [];

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Create a new todo
app.post('/api/todos', (req, res) => {
  const { title, completed = false } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const todo = {
    id: Date.now(),
    title,
    completed
  };

  todos.push(todo);
  res.status(201).json(todo);
});

// Default route
app.get('/', (req, res) => {
  res.send('Todo API is running. Use /api/todos to access the API.');
});

// Start the server only if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
  });
}

// Export the app for testing
module.exports = app;

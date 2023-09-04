const express = require('express');
const path = require('path');

const app = express();

// Serving static files from "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback to index.html for single-page applications
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001/');
});
// server.js

const express = require('express');
const path = require('path');  // For serving static files
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API route that sends data to the client
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the server-side!" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// server.js

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (CSS, JavaScript, images)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the combined HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'combined.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

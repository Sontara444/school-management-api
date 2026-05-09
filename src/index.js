const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/db'); // Test DB connection

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/schoolRoutes'));

app.get('/', (req, res) => {
    res.send('School Management API is running.');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

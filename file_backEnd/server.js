const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Database setup
const connectDB = require('./config/db');    // use of .env file
connectDB();   

app.listen(PORT, () => {
    console.log(`Listenig on port ${PORT}`);
});
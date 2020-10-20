const express = require('express');
const app = express();

// Routes that should handle request
app.get('/orders', (req, res, next) => {
    console.log('Someone requested Data!');
    res.json(['Grape','Orange','Apple','Watermelon']);
});

module.exports = app; // export app
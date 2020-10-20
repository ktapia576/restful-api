const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json()); // Allows to parse JSON since server will be sending and receiving JSON

// Endpoints that should handle request
app.get('/orders', (req, res, next) => {
    console.log('Someone requested Data!');
    // res.json(['Grape','Orange','Apple','Watermelon']);
    res.status(200).send(['Grape','Orange','Apple','Watermelon']);
});

app.listen(port, () => {
    console.log(`Server started successfully on PORT: ${port}`);
});
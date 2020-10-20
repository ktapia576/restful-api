const express = require('express'); // require express
const fetch = require('node-fetch'); // require node-fetch
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json()); // Allows to parse JSON since server will be sending and receiving JSON

const api_url_dog= 'https://dog.ceo/api/breeds/image/random'; // Get json response from dog api

app.get('/dog', async (req, res) => {
    try {
        const fetch_response = await fetch(api_url_dog);
        const ordersJSON = await fetch_response.json();
        res.json(ordersJSON);
    } catch (error) {
        console.log(error);
        res.json({message: 'error'});
    }
});
const api_url_cat = 'https://api.thecatapi.com/v1/images/search';

app.get('/cat', async (req, res) => {
    try {    
        const fetch_response = await fetch(api_url_cat);
        const ordersJSON = await fetch_response.json();
        res.json(ordersJSON);
    } catch (error) {
        console.log(error);
        res.json({message: 'error'});
    }
});

const api_url_local = 'http://127.0.0.1:3001/orders';   // Get orders from mock api server locally

app.get('/', async (req, res) => {
    try {
        const fetch_response = await fetch(api_url_local);
        const ordersJSON = await fetch_response.json();
        res.json(ordersJSON);
    } catch (error) {
        console.log(error);
        res.json({message: 'error'});
    }
});

app.listen(port, () => {
    console.log(`Server started successfully on PORT: ${port}`);
});
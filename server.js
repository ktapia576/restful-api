const http = require('http'); // require http module
const app = require('./api/app'); // import app.js file

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server started successfully on PORT: ${port}`);
});
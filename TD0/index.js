// Express app entry point : Basic server setup localhost:8080

// import express module

const express = require('express');
 
// start server on port 8080

const app = express();

// create a route for the home page index.html

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/contactme', (req, res) => {
    res.sendFile(__dirname + '/contactme.html');
});

// add a default route to handle 404 errors

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
});

// start server on port 8080

app.listen(8080, () => {
    console.log('Server started on http://localhost:8080');
});
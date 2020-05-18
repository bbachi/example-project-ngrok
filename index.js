const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>hello ngrok!!!</h1>");
});

app.listen(port, () => {
    console.log("express server listening on port ", port);
});
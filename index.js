const express = require('express');

const PORT = 3000;

const app = express(); // create a express server object

app.get('/home', (request, response) => {
    // response.send("hi there, welcome to get");
    response.json({
        message: "OK get"
    })
});

app.post('/home', (request, response) => {
    // response.send("hi there, welcome to post");
    response.json({
        message: "OK"
    })
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
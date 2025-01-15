// server.js
const express = require('express');
const app = express();
const PORT = 3100;

// define the route
app.get('/',
    (req, res) => {
        res.send(
            `<h1 style="color: green; text-align:center;">
            Hello Guys!</h1>`
        );
    });

app.listen(PORT,
    () => {
        console.log(
            `Server is listening at 
            http://localhost:${PORT}`
        );
    });

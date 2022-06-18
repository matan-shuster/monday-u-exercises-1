// Express boilerplate, hosting the `dist` file, connecting to the routes

import express from "express";

const port = 8000;
const app = express();


app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.status(200).json({
        health: 'OK'
    });
});


app.listen(port, () => {
    console.log("Server started on port", port);
});

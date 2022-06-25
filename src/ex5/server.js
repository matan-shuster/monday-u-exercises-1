// Express boilerplate, hosting the `dist` file, connecting to the routes

const express = require("express");
const router = require("./server/routes/api.js");
const bodyParser = require("body-parser");
const port = 8000;
const app = express();


app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

app.get('/', (req, res) => {
  res.status(200).json({
    health: 'OK'
  })
});

app.listen(port, () => {
  console.log("Server started on port", port);
});

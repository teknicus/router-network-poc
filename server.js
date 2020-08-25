const express = require("express");
const body_parser = require('body-parser');
const router = express.Router();
const app = express();

app.use(body_parser.json());

app.post('/test', (req, res) => {
console.log(req.body);
  return res.send('Received a POST HTTP method');
});

app.listen(3000,() => {
  console.log("Started on PORT 3000");
})

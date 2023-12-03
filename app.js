const express = require('express');
const app = express();
require('dotenv').config();

require("./model/index");

app.get('/', (req, res) => {
  res.send("I am live");
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server is up and running", PORT);
})
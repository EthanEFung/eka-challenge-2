require('dotenv').load();
require('dotenv').config();

const express = require('express');
const { urlencoded, json } = require('body-parser');
const path = require('path');

const app = express();
const router = require('./routes');
const port = process.env.PORT || 3000;

app
  .use(urlencoded({ extended: true }))
  .use(json())
  // .use(express.static(path.resolve('public')))
  .use(router)

app.listen(port, err => {
  if (err) throw `could not connect to port ${port}`;
  console.log(`listening on port ${port}`);
})  
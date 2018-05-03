const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/', function(request, response) {
  response.status(200).sendFile(path.resolve(`${__dirname}/../client/dist/index.html`));
})

module.exports = app;
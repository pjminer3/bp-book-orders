const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/', function(request, response) {
  response.sendFile(path.resolve(`${__dirname}/../client/dist/index.html`));
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


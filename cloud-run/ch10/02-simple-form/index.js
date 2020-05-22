const express = require('express');
const pug = require('pug');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  const pugTemplate = pug.compileFile('./views/index.pug');
  res.status(200).send(pugTemplate({
    service_url: 'https://announce-service-zffqyqpura-uc.a.run.app'}));
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

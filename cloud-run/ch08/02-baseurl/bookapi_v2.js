const data = require('./data/books.json');
const express = require ('express');


const port = process.env.PORT || 8080;
const port_test = 8080;

const apiBooks1 = require("./books1.js");
const app = express();


/*


app.put('/books/:id', async(req, res) => {

  res.status(200).json({status: 'PUT'});
});

app.delete('/books/:id', async(req, res) => {

  res.status(200).json({status: 'DELETE ID'});
});

app.delete('/books', async(req, res) => {

  res.status(200).json({status: 'DELETE'});
});

app.post('/books', async(req, res) => {

  res.status(200).json({status: 'POST'});
});

app.get('/books/:id', async(req, res) => {

  res.status(200).json({status: 'GET ID'});
});

app.get('/books', async(req, res) => {

  res.status(200).json("{status: GET}");
});

app.use (function(req, res) {
  if (port_test !== 8080) {
    res.status(500).send("Server Error");
    console.log('PORT: ', port_test);
  }
  else
    res.status(404).send("Client Error: Page Not Found");
});

*/



app.use ("/v1", apiBook1);

app.listen(port, () => {
  console.log('Chapter Eight - REST API example on ', port);
});


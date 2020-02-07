const express = require ('express');

const bookapi_v1 = express.Router();



bookapi_v1.put('/books/:id', async(req, res) => {

  res.status(200).json({status: 'PUT'});
});

bookapi_v1.delete('/books/:id', async(req, res) => {

  res.status(200).json({status: 'DELETE ID'});
});

bookapi_v1.delete('/books', async(req, res) => {

  res.status(200).json({status: 'DELETE'});
});

bookapi_v1.post('/books', async(req, res) => {

  res.status(200).json({status: 'POST'});
});

bookapi_v1.get('/books/:id', async(req, res) => {

  res.status(200).json({status: 'GET ID'});
});

bookapi_v1.get('/books', async(req, res) => {

  res.status(200).json("{status: GET}");
});


module.exports = bookapi_v1;


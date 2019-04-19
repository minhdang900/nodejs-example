const express = require('express');

const app = express();

// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});
// This route path will match acd and abcd.
app.get('/ab?cd', (req, res) => {
  res.send('ab?cd');
});
// This route path will match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd', (req, res) => {
  res.send('ab+cd');
});
// This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', (req, res) => {
  res.send('ab*cd');
});
// This route path will match /abe and /abcde.
// Request URL: http://localhost:3000/abe
app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e');
});
// This route path will match anything with an “a” in it.
// Request URL: http://localhost:3000/abcdef
app.get(/a/, (req, res) => {
  res.send('/a/');
});
// This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
// Request URL: http://localhost:3000/butterfly
app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/');
});

// Route parameters
// Request URL: http://localhost:3000/users/34/books/8989
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
});
// Request URL: http://localhost:3000/flights/LAX-SFO
app.get('/flights/:from-:to', (req, res) => {
  res.send(req.params);
});
module.exports = app;

const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const {url, method} = req;
  console.log(method, url);
  // Routing
  // if (url === '/about') {
  //   // write a response
  //   res.write('<h1>about us page<h1>');
  //   // end the response
  //   res.end();
  // } else if (url === '/contact') {
  //   // write a response
  //   res.write('<h1>contact us page<h1>');
  //   // end the response
  //   res.end();
  // } else {
  //   // write a response
  //   res.write('<h1>Hello World!<h1>');
  //   // end the response
  //   res.end();
  // }
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

server.once('listening', () => {
  console.log('Hello World server listening on port %d', port);
});

server.on('request', (req, res) => {
  console.log(res);
  const {url} = req;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200, {'content-type': 'text/plain'});
  // res.write('Hello World!');
  // res.end();

  // Routing
  if (url === '/about') {
    // write a response
    res.write('<h1>about us page<h1>');
    // end the response
    res.end();
  } else if (url === '/contact') {
    // write a response
    res.write('<h1>contact us page<h1>');
    // end the response
    res.end();
  } else {
    // write a response
    res.write('<h1>Hello World!<h1>');
    // end the response
    res.end();
  }
});

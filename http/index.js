const http = require('http');

const port = 3000;
console.log(process.env);
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const {url, method} = req;
  console.log(method, url);
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
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

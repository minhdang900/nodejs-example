const http = require('http')
const port = 3000
console.log(process.env);
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    const url = req.url;
    if (url === '/about') {
        res.write('<h1>about us page<h1>'); //write a response
        res.end(); //end the response
    } else if (url === '/contact') {
        res.write('<h1>contact us page<h1>'); //write a response
        res.end(); //end the response
    } else {
        res.write('<h1>Hello World!<h1>'); //write a response
        res.end(); //end the response
    }
})
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})

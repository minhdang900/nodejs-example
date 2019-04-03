const http = require('http')
const port = 3000
console.log(process.env);
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})

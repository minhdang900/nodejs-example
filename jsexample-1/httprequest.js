const https = require('https')
const options = {
    hostname: 'leotran.me',
    port: 80,
    path: '/',
    method: 'GET'
}
const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res);
    res.on('data', (d) => {
        process.stdout.write(d)
    })
})
req.on('error', (error) => {
    console.error(error)
})
req.end()

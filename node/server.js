const http = require('http')

// create the server
const server = http.createServer((req, res) => {
    // console.log('Request Made')

    res.setHeader('Content-Type', 'text/plain')

    switch (req.url) {
        case '/':
            res.write('Homepage')
            res.statusCode(200)
            res.end();
            break
        case '/about':
            res.write('About Us')
            res.end();
            break
        default:
            res.write('404 page')
            res.writeHead(400)
            res.end();
    }
})


//  listening for requests
server.listen(3000, 'localhost', () => {
    console.log('Listening of PORT 3000')
})
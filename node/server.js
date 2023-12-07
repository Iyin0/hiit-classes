const http = require('http')

const server = http.createServer((req, res) => {
    // console.log('Request Made')
    res.setHeader('Content-Type', 'text/plain')
    // console.log(req.url)
    switch (req.url) {
        case '/':
            res.writeHead(200)
            res.write('Homepage')
            res.end()
            break;
        case '/about':
            res.writeHead(200)
            res.write('About Us')
            res.end()
            break;
        default:
            res.writeHead(404)
            res.write('404 page')
            res.end()
            break;
    }

})

server.listen(3000, 'localhost', () => {
    console.log('Listening on PORT 3000')
})
const http = require('http')
const fs = require('fs')

// create server
const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Content-Type', 'text/html')
    // console.log(req.url)
    const viewRoute = './views/'

    switch (req.url) {
        case '/':
            // res.write('Homepage')
            // res.statusCode(200)
            // res.end()
            fs.readFile(`${viewRoute}index.html`, (err, data) => {
                res.writeHead(200)
                res.write(data)
                res.end()
            })
            break;
        case '/about':
            // res.write('About page')
            // res.statusCode(200)
            // res.end()
            fs.readFile(`${viewRoute}about.html`, (err, data) => {
                res.writeHead(200)
                res.write(data)
                res.end()
            })
            break;
        case '/terms':
            fs.readFile(`${viewRoute}terms.html`, (err, data) => {
                res.writeHead(200)
                res.write(data)
                res.end()
            })
            break;
        case '/contact':
            fs.readFile(`${viewRoute}contact.html`, (err, data) => {
                res.writeHead(200)
                res.write(data)
                res.end()
            })
            break;
        case '/login':
            res.write('<h1>Login page</h1>')
            res.end();
            break;
        default:
            res.write('<h1>404 page</h1>')
            // res.writeHead(404)
            // res.statusCode(400)
            res.end()
    }
})

// listen to requests
server.listen(3000, 'localhost', () => {
    console.log('Listen on PORT 3000')
})
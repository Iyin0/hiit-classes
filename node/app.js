const express = require('express')

const app = express()

app.use((req, res) => {
    res.status(404).send('404 Page')
})

app.get('/', (req, res) => {
    res.status(200).send('Homepage')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})


app.listen(3000, () => {
    console.log('Listing on PORT 3000')
})
const express = require('express')

const app = express()

app.get('/getComment', (req, res) => {
    res.status(200).json({
        name: 'Jame',
        comment: 'I dont listen in class'
    })
})

app.post('/postComment', (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)
})

app.listen(3000, () => {
    console.log('Listening on PORT 3000')
})
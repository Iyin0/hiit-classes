const express = require('express')      // import express package
const morgan = require('morgan')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')

// create express app
const app = express()

const PORT = process.env.PORT || 3000

//  // middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log('Entered')

    next()
})

app.post('/contact_us', (req, res) => {
    const { first_name, last_name, email, body } = req.body

    try {
        if (!first_name) throw Error('Insert your first name')
        res.status(200).json({ message: `Your request has been recorded. We will get back to you soon!` })
    } catch (error) {
        res.status(400).json({ erorr: error.message })
    }
})

app.get('/getUser/:id', (req, res) => {

    const { id } = req.params

    try {
        res.status(200).json({ message: id })
    } catch (error) {
        res.status(400).json({ erorr: error.message })
    }
})


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
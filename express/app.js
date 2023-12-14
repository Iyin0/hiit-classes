const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const cors = require('cors')
const uuid = require('uuid')
const bodyParser = require('body-parser')
const db = require('./db')

const app = express()

const PORT = 3000

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use(cors({
    origin: ["http://127.0.0.1:5500"],
    credentials: true
}))


app.get('/getComments', async (req, res) => {
    try {
        const sql = 'SELECT * FROM comments'
        const [data] = await db.execute(sql)

        let response = {
            data,
            statusCode: 200,
            message: 'Comment posted successfull',
        }

        res.status(200).json(response)

    } catch (error) {
        const response = {
            message: error.message,
            statusCode: 400
        }
        res.status(400).json(response)
    }
})

app.post('/postComment', async (req, res) => {

    const { name, comment } = req.body
    const id = uuid.v4()

    try {
        if (!name) throw Error('Name is required')
        if (!comment) throw Error('Comment is required')

        const sql = `INSERT INTO comments (id, name, comment) VALUES ("${id}", "${name}", "${comment}");`
        await db.execute(sql)

        let response = {
            statusCode: 200,
            message: 'Comment posted successfull',
        }

        res.status(200).json(response)
    } catch (error) {
        const response = {
            message: error.message,
            statusCode: 400
        }
        res.status(400).json(response)
    }
})


app.get('/getComment', async (req, res) => {

    const { id } = req.query

    console.log(id)
    try {

        if (!id) throw Error('Comment ID is required')
        const sql = `SELECT * FROM comments WHERE id='${id}'`
        const [data] = await db.execute(sql)

        let response = {
            data: data[0],
            statusCode: 200,
            message: 'Comment posted successfull',
        }

        res.status(200).json(response)

    } catch (error) {
        const response = {
            message: error.message,
            statusCode: 400
        }
        res.status(400).json(response)
    }
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
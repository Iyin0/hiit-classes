const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const db = require('./db')
const uuid = require('uuid')

const app = express()

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use(cors({
    origin: ["http://127.0.0.1:5500"],
    credentials: true
}))

app.get('/getComment', async (req, res) => {

    const sqlQuery = 'SELECT * FROM blog'
    const [blogs] = await db.execute(sqlQuery)

    res.status(200).json(blogs)
})

app.post('/postComment', async (req, res) => {
    const { title, body, author_id } = req.body

    try {

        // console.log(name)
        // console.log(id)
        // console.log(comment)
        const id = uuid.v4()

        if (!title) throw Error('title must be included')
        if (!body) throw Error('body must be included')
        if (!author_id) throw Error('author must be included')

        let sql = `INSERT INTO blog (id, title, body, author_id) 
        VALUES ("${id}", "${title}", "${body}", "${author_id}")`

        await db.execute(sql)

        res.status(200).json({ message: 'Blog posted successfully' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.listen(3000, () => {
    console.log('Listening on PORT 3000')
})
// cors bcrypt express dotenv validator morgan mysql2 express-session jsonwebtoken uuid
const express = require('express') // import express package
const morgan = require('morgan')
require('dotenv').config()      // importing the dot env file
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session');
const accountsRoutes = require('./routes/accountRoutes')
const blogRoutes = require('./routes/blogsRoutes')

const app = express()       // creating an instance of express (class)
const PORT = process.env.PORT || 3000       // using the dot env file


// Middlewares
app.use(morgan('dev'))

app.use(bodyParser.json())      // used to identify the body of a request

app.use(
    cors({
        origin: [`https://localhost:${PORT}`],
        credentials: true
    })
)

// Configure express-session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));

app.use('/accounts', accountsRoutes)
app.use('/blogs', blogRoutes)

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})

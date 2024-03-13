const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const db = require('./db');


const PORT = process.env.PORT || 4000;


const app = express();


// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(cors({
    origin: ['http:127.0.0.1:5500'],
    credentials: true
}));

app.use((req, res, next) => {
    console.log('Request was made');

    next();
});

app.get('/getBlogs', async (req, res) => {

    try {
        let sql = 'SELECT * FROM blogs';

        const [data] = await db.execute(sql);   // execute sql statement

        const response = {
            message: "Fetched all blogs sucessfully",
            statusCode: 200,
            status: "success",
            data
        };

        res.status(200).json(response);
    } catch (error) {
        const response = {
            message: error.message,
            statusCode: 400,
            status: "failed",
        };
        res.status(400).json(response);
    }
});

// app.get('/getBlogs/allBlogs', (req, res) => {
//     const response = {
//         message: 'All Blogs response',
//         statusCode: 200,
//         status: "success",
//     };
//     res.status(200).json(response);
// });

app.get('/getBlog', async (req, res) => {
    const { id } = req.query;

    try {
        if (!id) {
            throw Error("Blog ID is required");
        }

        let sql = `SELECT * FROM blogs WHERE id="${id}"`;

        const [data] = await db.execute(sql);   // execute sql statement

        if (data.length < 1) {
            const response = {
                message: "Resource not found",
                statusCode: 404,
                status: "failed",
            };
            res.status(404).json(response);
        } else {
            const response = {
                message: "Fetched blog sucessfully",
                statusCode: 200,
                status: "success",
                data
            };

            res.status(200).json(response);
        }

    } catch (error) {
        const response = {
            message: error.message,
            statusCode: 400,
            status: "failed",
        };
        res.status(400).json(response);
    }
});

app.post('/postBlog', async (req, res) => {

    const { title, body, author } = req.body;

    try {
        if (!title || !body || !author) {
            throw Error("All fields are required");
        }

        const id = uuid.v4();        // generate id

        const sql = `INSERT INTO blogs(id, title, body, author) VALUES ("${id}", "${title}", "${body}", "${author}") `;
        await db.execute(sql);

        const response = {
            message: "Successfully posted a blog",
            statusCode: 200,
            status: "success",
        };

        res.status(200).json(response);
    } catch (error) {
        const response = {
            message: error.message,
            statusCode: 400,
            status: "failed",
        };
        res.status(400).json(response);
    }
});

app.patch('/updateBlog/:id', async (req, res) => {
    const { id } = req.params;

    const { title, body, author } = req.body;

    try {
        if (!id) {
            throw Error("Blog ID is required");
        }

        if (!title && !body && !author) {
            throw Error("Title, Body or Author is required");
        }

        let exitsSql = `SELECT * FROM blogs WHERE id = '${id}'`;

        const [item] = await db.execute(exitsSql);

        if (!item[0]) throw Error('Blog does not exist');

        let updates = [];

        if (title) {
            updates.push(`title = '${title}'`);
        }

        if (body) {
            updates.push(`body = '${body}'`);
        }

        if (author) {
            updates.push(`author = '${author}'`);
        }

        if (updates.length === 0) {
            throw Error("At least one of Title, Body, or Author must be provided");
        }

        const sql = `UPDATE blogs SET ${updates.join(', ')} WHERE id = '${id}'`;

        // const sql = `UPDATE blogs SET title="${title}" WHERE id="${id}"`;

        await db.execute(sql);

        const response = {
            message: "Blog updated successfully",
            statusCode: 200,
            status: "success",
        };

        res.status(200).json(response);

    } catch (error) {
        const response = {
            message: error.message,
            statusCode: 400,
            status: "failed",
        };
        res.status(400).json(response);
    }
});

app.delete('/deleteBlog/:id', async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            throw Error("Blog ID is required");
        }

        let exitsSql = `SELECT * FROM blogs WHERE id = '${id}'`;

        const [item] = await db.execute(exitsSql);

        if (!item[0]) throw Error('Blog does not exist');

        const sql = `DELETE FROM blogs WHERE id="${id}"`;
        await db.execute(sql);

        const response = {
            message: "Blog deleted successfully",
            statusCode: 200,
            status: "success",
        };

        res.status(200).json(response);


    } catch (error) {
        const response = {
            message: error.message,
            statusCode: 400,
            status: "failed",
        };
        res.status(400).json(response);
    }
});


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
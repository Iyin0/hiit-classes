const db = require('../config/db')
const timestamp = require('../middlewares/timestamp')
const uuid = require('uuid')

class Blogs {

    static async createNewBlog(user_id, title, body) {

        if (!title) throw Error('Blog must have a title')
        if (!body) throw Error('Blog must have a content')

        const id = uuid.v4()
        const created_at = await timestamp()

        let sql = `INSERT INTO blogs (id, user_id, title, body, created_at)
                    VALUES('${id}', '${user_id}', '${title}', '${body}', '${created_at}')`

        await db.execute(sql)

    }

    static async getAllBlogs() {
        let sql = `SELECT * FROM blogs`

        const [blogs] = await db.execute(sql)

        return blogs
    }



}

module.exports = Blogs
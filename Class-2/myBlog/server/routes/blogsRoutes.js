const express = require('express')
const router = express.Router()
const blogs = require('../controllers/blogsController')
const requireAuth = require('../middlewares/requireAuth')

router.use(requireAuth)
router.post('/create', blogs.addBlog)
router.get('/', blogs.getAllBlogs)

module.exports = router
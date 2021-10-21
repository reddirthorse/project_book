const express = require('express')
const router = express.Router()
const bookSearch = require('./bookSearch')

router.use('/books',bookSearch)

module.exports = router
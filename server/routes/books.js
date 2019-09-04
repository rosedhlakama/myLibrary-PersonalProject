const express = require('express')

const db = require('../db')

const router = express.Router()

const request = require('superagent')

const listBooks = require('../../client/app')

module.exports = router

router.get('/books', (req, res) => {
    db.getBooks(req.app.connection)
        .then(response => {
            res.json(response)
        })
        .catch(e => {
            res.status(500)
                .send(e.message)
        })

})


router.get('/', (req, res) => {
    res.render('index')
})


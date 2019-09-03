const express = require('express')

const db = require('../db')

const router = express.Router()

const request = require('superagent')

module.exports = router

router.get('/', (req, res) => {

        res.render('index')
    })
   


module.exports = router

const express = require('express')

const db = require('../db')

const router = express.Router()
const request = require('superagent')
module.exports = router

router.get('/', (req, res) => {
  db.getUsers(req.app.connection)
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router

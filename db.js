const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser,
  getUsers,
  addUser,
  getUsersWhoLike
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function addUser(user, db = connection) {
  return db('users').insert(user)
}

function getUsersWhoLike(favouriteName, db = connection) {
  return db('users')
    .select('users.*')
    .join('favourites_users', 'favourites_users.user_id', 'users.id')
    .join('favourites', 'favourites.id', 'favourites_users.favourite_id')
    .where('favourites.name', favouriteName)
}


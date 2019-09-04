
module.exports = {
  getBooks,
  
}

function getBooks (db) {
  return db('books').select()
}

function getBook (id, db) {
  return db('users').where('id', id).first()
}

function addBook(user, db) {
  return db('users').insert(user)
}

function getUsersWhoLike(favouriteName, db) {
  return db('users')
    .select('users.*')
    .join('favourites_users', 'favourites_users.user_id', 'users.id')
    .join('favourites', 'favourites.id', 'favourites_users.favourite_id')
    .where('favourites.name', favouriteName)
}


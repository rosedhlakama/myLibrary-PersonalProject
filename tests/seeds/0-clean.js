exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).delete()

  return empty('users')()
    .then(() => empty('favourites')())
    .then(() => empty('favourites_users')())
}

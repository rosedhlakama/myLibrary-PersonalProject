
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favourites', t => {
    t.increments('id')
    t.string('name')
  }).then(() => {
    return knex.schema.createTable('favourites_users', t => {
      t.integer('favourite_id')
      t.integer('user_id')
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favourites').then(() => {
    knex.schema.dropTable('favourites_users')
  })
};

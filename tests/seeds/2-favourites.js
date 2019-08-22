exports.seed = function (knex, Promise) {
  return knex('favourites').insert([
    { id: 89901, name: 'chocolate'},
    { id: 89902, name: 'tiramisu'},
    { id: 89903, name: 'bananas'}
  ]).then(() => {
    return knex('favourites_users').insert([
      {user_id: 99901, favourite_id: 89901},
      {user_id: 99901, favourite_id: 89902},
      {user_id: 99901, favourite_id: 89903},
      {user_id: 99902, favourite_id: 89901},
    ])
  })
}

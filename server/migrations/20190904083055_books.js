
exports.up = function(knex, Promise) {
   return knex.schema
   .createTable('books', (table) => {
        table.increments('id').primary();
        table.string('title');
        table.text('blurb');
        table.integer('yearPublished');
        table.boolean('procured');
        table.date('dateProcured');
   })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('books')
};

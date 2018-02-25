const knex = require('knex')({
  client: 'pg',
  connection: process.env.ELEPHANT_CONNECTION,
  searchPath: ['knex', 'public']
});
const bookshelf = require('bookshelf')(knex);

knex.schema.hasTable('users')
  .then(exists => {
    if (!exists) {
      return knex.schema.createTable(
        'users',
        (table) => {
          table.increments('id').primary();
          table.string('username').nullable();
          table.string('email').nullable();
          table.string('password').nullable();
          table.string('first_name').nullable();
          table.string('last_name').nullable();
          table.string('phone_number').nullable();
          table.json('address').nullable();
          table.timestamps();
        })
        .then(() => {
          knex.insert('users', {}).returning('*').toString();
        })
    }
  })
  .catch(err => console.log(err));

const User = bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = { User }


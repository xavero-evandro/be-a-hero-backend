const knex = require('knex');
const config = require('../../knexfile');

const dbConfig =
  process.env.NODE_ENV === 'test' ? config.test : config.development;

const connection = knex(dbConfig);

module.exports = connection;

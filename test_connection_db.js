const knex = require('knex');
const config = require('./knexfile');

const environment = 'staging';
const connection = knex(config[environment]);

connection.raw('SELECT 1')
  .then(() => {
    console.log('Connection réussie');
    process.exit(0);
  })
  .catch(err => {
    console.error('Connection failed', err);
    process.exit(1);
  });

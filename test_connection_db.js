const knex = require('knex');
const config = require('./knexfile');

const environment = 'development';  // Assure-toi de tester le bon environnement
const connection = knex(config[environment]);

// Test de la connexion
connection.raw('SELECT 1')
  .then(() => {
    console.log('Connection réussie');
    process.exit(0);
  })
  .catch(err => {
    console.error('Connection failed', err);
    process.exit(1);
  });

// Improta Knex para uso do SQLite
const knex = require('knex')
// Busca a configuração feita na pasta raiz knexfile
const configuration = require('../../knexfile');
// Conecta ao SQLite
const connection = knex(configuration.development)
// Exporta conexão com banco de dados
module.exports = connection;
const knex = require('knex');
const knexfile=('./knexfile.js')

const db = knex(knexfile.development);
module.exports=db;





// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//       host : '127.0.0.1',
//       user : 'visitor',
//       password : 'thinksys@123',
//       database : 'DummyDB'
//     }
//   });
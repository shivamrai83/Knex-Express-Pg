
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex('table_name').del() // Edit the table name here.
    .then(function () {
  // Inserts seed entries
      return knex('table_name').insert([ // Edit the table name here.
        {id: 1, colName: 'rowValue1'}, // Edit seed data here.
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
       ]);
      });
     };
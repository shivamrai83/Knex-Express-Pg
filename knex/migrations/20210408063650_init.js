
exports.up = function(knex) {
  return knex.schema.createTable('knex-table',table=>{  // creating a table with createTable of name knex-table with specific colums.
      table.increments('id');                           // column of id with auto increment.
      table.string('name').notNullable().unique();      // column of name with type string, not Null & Unique.
      table.string('email').notNullable().unique();     // column of email with type string, not Null & Unique.
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('knex_table');           // for dropping a table we use export down.
};
  
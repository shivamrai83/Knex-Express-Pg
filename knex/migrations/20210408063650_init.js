
exports.up = function(knex) {
  return knex.schema.createTable('knex-table',table=>{
      table.increments('id');
      table.string('name').notNullable().unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('knex_table');
};

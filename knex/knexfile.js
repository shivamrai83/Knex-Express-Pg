// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',        //database Name (like => pg, mysql....etc)
    connection: {
      database: 'knex',         //name of database in the Databases section in PG admin 4.
      user:     'visitor',      //username of the user while creatin the database.
      password: 'Thinksys@123'  //password of the particular user.
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_table'   //table name added in migrations
    },
  },
};

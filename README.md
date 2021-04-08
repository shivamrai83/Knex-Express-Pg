# Knex-Express-Pg

## Follow These Steps To Configure the Knex-PG project.

> Create a basic Node.js Server
### install knex
> npm i knex -save
### install postgres 
> npm install pg
### create a migration folder and configure the database details in it.
> npx knex migrate:make init directory db/migration
### after configuring the database details migrate it (proceed for connection).
>npx knex migrate:latest --knexfile db/knexfile.js

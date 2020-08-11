## Tables

- every table needs a primary key
  - unique idenitfier for that particular table

## Knex

- initialize database with knex
  - knex init
    - creates a knexfile.js file
    - contains database configuration for development environment, staging environment, production environment
    - development configuration
      - add useNullAsDefault: true after connection
      - connection filename of the database file
- create a new table
  - knex migrate:make create_accounts_table
  - where create_accounts_table is the name of the migration file
  - migration file has two functions
    - exports.up
      - records changes to db schema
    - exports.down
      - records how to undo the changes that occurs in the exports.up
  - run pending migrations
    - knex migrate:latest

## Mantras

    - every table must have a primary key
    - every change to the database schema (structure, NOT the data) must be done with a new migration

## Migrations

    - create migration --> knex migrate:make name
    - run pending migrations --> knex migrate:latest
    - run the down() function to undo changes --> knex migrate:rollback

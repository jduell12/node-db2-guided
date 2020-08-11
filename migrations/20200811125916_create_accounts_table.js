//records change of db schema
exports.up = function (knex) {
  //id, name, email - id is primary key that autoincrements
  return knex.schema.createTable('accounts', tbl => {
    //primary key
    tbl.increments('id')

    //name is up to 256 characters
    //name is required and is unique
    tbl
      .string('name', 256)
      .notNullable()
      .unique()

    //email is optional
    tbl.string('email')
  })
}

//describes how to undo the changes made from the up function
exports.down = function (knex) {
  //removes the accounts table
  return knex.schema.dropTableIfExists('accounts')
}

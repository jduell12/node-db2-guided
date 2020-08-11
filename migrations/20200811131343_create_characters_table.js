exports.up = function (knex) {
  return knex.schema.createTable('characters', tbl => {
    //character id - primary key
    tbl.increments('id')

    //name - required
    tbl.string('name').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('characters')
}

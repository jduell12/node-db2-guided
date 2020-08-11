exports.up = function (knex) {
  return knex.schema
    .createTable('classes', tbl => {
      tbl.increments('id')
      tbl
        .string('name')
        .notNullable()
        .unique()
    })
    .createTable('weapons', tbl => {
      tbl.increments('id')
      tbl.string('name').notNullable()
      tbl
        .integer('power')
        .notNullable()
        .defaultTo(1)
    })
    .createTable('armors', tbl => {
      tbl.increments('id')
      tbl.string('name').notNullable()
      tbl
        .integer('defense')
        .notNullable()
        .defaultTo(1)
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('armors')
    .dropTableIfExists('weapons')
    .dropTableIfExists('classes')
}

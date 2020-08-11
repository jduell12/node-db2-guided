exports.up = function (knex) {
  return knex.schema
    .createTable('professions', tbl => {
      tbl.increments('id')
      tbl.string('name', 256).notNullable()
    })
    .createTable('tools', tbl => {
      tbl.increments('id')
      tbl.string('name', 256).notNullable()
    })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('tools').dropTableIfExists('professions')
}

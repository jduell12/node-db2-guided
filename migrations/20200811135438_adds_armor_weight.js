exports.up = function (knex) {
  //adds new column to existing table
  return knex.schema.table('armors', tbl => {
    tbl
      .float('weight')
      .notNullable()
      .defaultTo(0)
  })
}

exports.down = function (knex) {
  return knex.schema.table('armors', tbl => {
    tbl.dropColumn('weight')
  })
}

'use strict'

const Schema = use('Schema')

class CollectionsSchema extends Schema {
  up () {
    this.create('collections', (table) => {
      table.increments()
      table.string("title")
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('collections')
  }
}

module.exports = CollectionsSchema

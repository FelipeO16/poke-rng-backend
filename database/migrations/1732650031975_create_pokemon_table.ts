import { BaseSchema } from '@adonisjs/lucid/schema'

export default class PokemonSchema extends BaseSchema {
  protected tableName = 'pokemon'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.integer('pokedex_id').unsigned().notNullable().unique()
      table
        .integer('type_one_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('types')
        .onDelete('SET NULL')
      table
        .integer('type_two_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('types')
        .onDelete('SET NULL')
      table.string('image').notNullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

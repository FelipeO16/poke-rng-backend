import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AddRarityToPokemon extends BaseSchema {
  protected tableName = 'pokemon';

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.enum('rarity', ['common', 'uncommon', 'rare', 'legendary']).defaultTo('common');
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('rarity');
    });
  }
}

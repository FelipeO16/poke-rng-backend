import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import Type from '#models/type'

export default class Pokemon extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare image: string

  @column()
  declare rarity: 'common' | 'uncommon' | 'rare' | 'legendary'

  @column()
  declare pokedexId: number

  @column()
  declare typeOneId: number | null

  @column()
  declare typeTwoId: number | null

  @belongsTo(() => Type, { foreignKey: 'typeOneId' })
  declare type1: BelongsTo<typeof Type>

  @belongsTo(() => Type, { foreignKey: 'typeTwoId' })
  declare type2: BelongsTo<typeof Type>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

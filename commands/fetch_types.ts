import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Type from '#models/type'
import Pokemon from '#models/pokemon'

export default class FetchTypes extends BaseCommand {
  static commandName = 'fetch:types'
  static description =
    'This command will fetch all Pokemon types from the PokeAPI and store them in the pokemon database'

  static options: CommandOptions = {}

  async run() {
    const types = await Type.all()
    types.forEach((type) => {
      fetch(`https://pokeapi.co/api/v2/type/${type.id}/`)
        .then((response) => response.json())
        .then((data) => {
          data.pokemon.forEach(({ pokemon, slot }) => {
            Pokemon.findBy('name', pokemon.name).then((poke) => {
              if (poke) {
                if (slot === 1) poke.typeOneId = type.id
                else poke.typeTwoId = type.id
                poke.save()
              }
            })
          })
        })
    })
  }
}

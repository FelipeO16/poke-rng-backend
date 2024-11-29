import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Type from '#models/type'

export default class extends BaseSeeder {
  async run() {
    await Type.createMany([
      {
        id: 1,
        name: 'normal',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/1.png',
      },
      {
        id: 2,
        name: 'fighting',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/2.png',
      },
      {
        id: 3,
        name: 'flying',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/3.png',
      },
      {
        id: 4,
        name: 'poison',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png',
      },
      {
        id: 5,
        name: 'ground',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/5.png',
      },
      {
        id: 6,
        name: 'rock',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/6.png',
      },
      {
        id: 7,
        name: 'bug',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/7.png',
      },
      {
        id: 8,
        name: 'ghost',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/8.png',
      },
      {
        id: 9,
        name: 'steel',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/9.png',
      },
      {
        id: 10,
        name: 'fire',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/10.png',
      },
      {
        id: 11,
        name: 'water',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/11.png',
      },
      {
        id: 12,
        name: 'grass',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png',
      },
      {
        id: 13,
        name: 'electric',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/13.png',
      },
      {
        id: 14,
        name: 'psychic',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/14.png',
      },
      {
        id: 15,
        name: 'ice',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/15.png',
      },
      {
        id: 16,
        name: 'dragon',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/16.png',
      },
      {
        id: 17,
        name: 'dark',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/17.png',
      },
      {
        id: 18,
        name: 'fairy',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/18.png',
      },
      {
        id: 19,
        name: 'stellar',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/19.png',
      },
    ])
  }
}

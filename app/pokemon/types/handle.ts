import Pokemon from '#models/pokemon'

interface PokemonResponse extends Pokemon {
  [x: string]: any
  type_one_id: number
  type_two_id: number
  type_one: string
  type_two: string
  type_one_image: string
  type_two_image: string
}

type PokemonList = Array<PokemonResponse>

export async function handle(list: PokemonList): Promise<any> {
  return list.map((pokemon: PokemonResponse) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image,
      pokedexId: pokemon.pokedex_id,
      rarity: pokemon.rarity,
      types: [
        {
          id: pokemon.type_one_id,
          name: pokemon.type_one,
          image: pokemon.type_one_image,
        },
        {
          id: pokemon.type_two_id,
          name: pokemon.type_two,
          image: pokemon.type_two_image,
        },
      ].filter((type) => type.name !== null),
    }
  })
}

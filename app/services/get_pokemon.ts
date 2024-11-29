import db from '@adonisjs/lucid/services/db'

export async function getPokemon(pokedexId: number): Promise<any> {
  return await db
    .from('pokemon')
    .select(
      'pokemon.*',
      'types.name as type_one',
      'types_two.name as type_two',
      'types.image as type_one_image',
      'types_two.image as type_two_image'
    )
    .join('types', 'types.id', 'pokemon.type_one_id')
    .leftJoin('types as types_two', 'types_two.id', 'pokemon.type_two_id')
    .where('pokemon.pokedex_id', pokedexId)
}

export async function getAllPokemons(): Promise<any> {
  return await db
    .from('pokemon')
    .select(
      'pokemon.*',
      'types.name as type_one',
      'types_two.name as type_two',
      'types.image as type_one_image',
      'types_two.image as type_two_image'
    )
    .join('types', 'types.id', 'pokemon.type_one_id')
    .leftJoin('types as types_two', 'types_two.id', 'pokemon.type_two_id')
    .orderBy('pokemon.id')
}

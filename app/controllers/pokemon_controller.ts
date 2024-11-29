import type { HttpContext } from '@adonisjs/core/http'
import { getPokemon, getAllPokemons } from '#services/get_pokemon'
import { handle } from '#pokemon/types/handle'
// import { handle } from '../pokemon/types/handle.ts'
export default class PokemonController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return handle(await getAllPokemons())
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    // Fetch and return a single Pokemon by its id on  the server
    const pokemon = await getPokemon(params.id)
    return handle(pokemon)
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import User from '#models/user'
import Type from '#models/type'
const PokemonController = () => import('#controllers/pokemon_controller')

router.get('/', async () => {
  return await User.all()
})

router.get('/types', async () => {
  return await Type.all()
})

router.get('/pokemon/:id', [PokemonController, 'show'])
router.get('/pokemons', [PokemonController, 'index'])

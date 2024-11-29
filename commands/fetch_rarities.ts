import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import { getAllPokemons } from '#services/get_pokemon'
import Type from '#models/type'
import { handle } from '#pokemon/types/handle'
import Pokemon from '#models/pokemon'

export default class FetchRarities extends BaseCommand {
  static commandName = 'fetch:rarities'
  static description =
    'This command will fetch all Pokemon rarities from the PokeAPI and store them in the pokemon database'

  static options: CommandOptions = {}

  async run() {
    async function getTypeId(typeName: string): Promise<number | undefined> {
      const type = await Type.query().where('name', typeName).first()
      return type?.id
    }

    // return await getPokemon(1)
    const calculateRarity = (pokemon: any): 'common' | 'uncommon' | 'rare' | 'legendary' => {
      const rareNames = [
        // Evoluções finais importantes
        'charizard',
        'blastoise',
        'venusaur',
        'tyranitar',
        'salamence',
        'metagross',
        'garchomp',
        'hydreigon',
        'dragapult',

        // Pokémon icônicos ou difíceis de encontrar
        'lucario',
        'gengar',
        'snorlax',
        'gyarados',
        'dragonite',
        'alakazam',
        'arcanine',
        'machamp',

        // Tipos únicos ou raros
        'dragapult',
        'noivern',
        'goodra',
        'altaria',

        // Outros populares
        'togekiss',
        'espeon',
        'umbreon',
        'vaporeon',
        'jolteon',
        'flareon',
        'sylveon',
      ]

      const legendaryNames = [
        'articuno',
        'zapdos',
        'moltres',
        'mewtwo',
        'mew',
        'raikou',
        'entei',
        'suicune',
        'lugia',
        'ho-oh',
        'celebi',
        'regirock',
        'regice',
        'registeel',
        'latias',
        'latios',
        'kyogre',
        'groudon',
        'rayquaza',
        'jirachi',
        'deoxys',
        'uxie',
        'mesprit',
        'azelf',
        'dialga',
        'palkia',
        'heatran',
        'regigigas',
        'giratina',
        'cresselia',
        'darkrai',
        'shaymin',
        'arceus',
        'victini',
        'cobalion',
        'terrakion',
        'virizion',
        'tornadus',
        'thundurus',
        'reshiram',
        'zekrom',
        'landorus',
        'kyurem',
        'keldeo',
        'meloetta',
        'genesect',
        'xerneas',
        'yveltal',
        'zygarde',
        'diancie',
        'hoopa',
        'volcanion',
        'tapu-koko',
        'tapu-lele',
        'tapu-bulu',
        'tapu-fini',
        'cosmog',
        'cosmoem',
        'solgaleo',
        'lunala',
        'nihilego',
        'buzzwole',
        'pheromosa',
        'xurkitree',
        'celesteela',
        'kartana',
        'guzzlord',
        'necrozma',
        'magearna',
        'marshadow',
        'zeraora',
        'zacian',
        'zamazenta',
        'eternatus',
        'kubfu',
        'urshifu',
        'zarude',
        'regieleki',
        'regidrago',
        'glastrier',
        'spectrier',
        'calyrex',
      ]

      const pokemonName = pokemon.name.toLowerCase()
      // Verificar se o Pokémon é lendário
      if (legendaryNames.some((name) => pokemonName.includes(name))) {
        return 'legendary'
      }

      // Verificar se o Pokémon é raro
      if (rareNames.includes(pokemon.name.toLowerCase())) {
        return 'rare'
      }

      // Classificar evoluções finais não listadas como incomuns
      const finalEvolutions = [
        // Geração 1
        'venusaur',
        'charizard',
        'blastoise',
        'butterfree',
        'beedrill',
        'pidgeot',
        'raticate',
        'arbok',
        'arcanine',
        'machamp',
        'poliwrath',
        'alakazam',
        'golem',
        'gyarados',

        // Geração 2
        'meganium',
        'typhlosion',
        'feraligatr',
        'furret',
        'ursaring',
        'magcargo',

        // Geração 3
        'blaziken',
        'swampert',
        'sceptile',
        'severus',
        'exploud',
        'crawdaunt',
        'flygon',

        // Geração 4
        'torterra',
        'infernape',
        'empoleon',
        'electivire',
        'magmortar',

        // Geração 5
        'serperior',
        'emboar',
        'samurott',
        'conkeldurr',
        'haxorus',

        // Geração 6
        'delphox',
        'greninja',
        'chesnaught',
        'noivern',

        // Geração 7
        'decidueye',
        'incineroar',
        'primarina',
        'golisopod',

        // Geração 8
        'inteleon',
        'cinderace',
        'rillaboom',
        'dragapult',
        'zarude',
      ]
      if (finalEvolutions.includes(pokemon.name.toLowerCase())) {
        return 'rare'
      }

      const uncommonNames = [
        // Geração 1
        'ivysaur',
        'charmeleon',
        'wartortle',
        'metapod',
        'pidgeotto',
        'fearow',
        'golbat',
        'seaking',
        'weezing',
        'magneton',
        'machoke',
        'graveler',
        'tentacool',
        'tentacruel',
        'dugtrio',
        'politoed',
        'zubat',
        'caterpie',

        // Geração 2
        'bayleef',
        'quilava',
        'croconaw',
        'furret',
        'ursaring',
        'slugma',
        'magcargo',
        'hoothoot',

        // Geração 3
        'combusken',
        'marshtomp',
        'grovyle',
        'swampert',
        'wailmer',
        'whismur',
        'loudred',
        'trubbish',
        'scraggy',
        'beldum',
        'corphish',
        'swalot',
        'balltoy',

        // Geração 4
        'grotle',
        'chimchar',
        'grotle',
        'luxray',
        'roselia',
        'medicham',
        'spiritomb',
        'gastrodon',

        // Geração 5
        'servine',
        'simisage',
        'emolga',
        'trubbish',
        'yamask',
        'roggenrola',

        // Geração 6
        'froakie',
        'quilladin',
        'bunnelby',
        'fletchinder',
        'noibat',
        'skiddo',
        'pansear',

        // Geração 7
        'snorlax',
        'honchkrow',
        'popplio',
        'golisopod',
        'toucannon',
        'solgaleo',

        // Geração 8
        'squovet',
        'gossifleur',
        'rillaboom',
        'cinderace',
        'dragapult',
        'grapploct',
        'morgrem',
        'corviknight',
      ]

      if (uncommonNames.includes(pokemon.name.toLowerCase())) {
        return 'uncommon'
      }

      // Caso contrário, é comum
      return 'common'
    }

    for (const pokemon of await handle(await getAllPokemons())) {
      const rarity = calculateRarity(pokemon)
      console.log(pokemon)
      await Pokemon.updateOrCreate(
        { pokedexId: pokemon.pokedexId },
        {
          name: pokemon.name,
          image: pokemon.image,
          typeOneId: await getTypeId(pokemon.types[0].name),
          typeTwoId: pokemon.types[1] ? await getTypeId(pokemon.types[1].name) : null,
          rarity,
        }
      )
    }
  }
}

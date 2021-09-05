import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
  })

  test('debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de llamar mixPokemonArray al montar', () => {
    const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
    const wrapper = shallowMount(PokemonPage)
    expect(mixPokemonArraySpy).toHaveBeenCalled()
  })

  test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de mostrar los componentes de pokemonPicture y pokemonOptions', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      },
    })
    
    const picture = wrapper.find('pokemon-picture-stub')
    const options = wrapper.find('pokemon-options-stub')

    // PokemonPicture debe de existir
    expect(picture.exists()).toBeTruthy()

    // PokemonOptions debe de existir
    expect(options.exists()).toBeTruthy()
    
    // PokemonPicture attribute pokemonid === '5'
    expect(picture.attributes('pokemonid')).toBe('5')

    // PokemonOptions attribute toBe true
    expect(options.attributes('pokemons')).toBeTruthy()
    
  })
})

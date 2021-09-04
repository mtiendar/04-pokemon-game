import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemons } from "../mocks/pokemons.mock";

describe("Pokemon Options Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons
      }
    });
  });

  test("debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  })

  test('debe de mostrar las 4 operaciones correctamente', () => {
    // que existan 4 li
    // cada item debe de tener su nombre de pokemón
    const liTags = wrapper.findAll('li')
    expect(liTags.length).toBe(4)

    expect(liTags[0].text()).toBe('pikachu')
    expect(liTags[1].text()).toBe('charmander')
    expect(liTags[2].text()).toBe('venusaur')
    expect(liTags[3].text()).toBe('mew')
  })

  test('debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {
    const [li1, li2, li3, li4] = wrapper.findAll('li')
    
    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')

    console.log(wrapper.emitted('selection'))
    expect(wrapper.emitted('selection').length).toBe(4)
    expect(wrapper.emitted('selection')[0]).toEqual([5])
    expect(wrapper.emitted('selection')[1]).toEqual([10])
    expect(wrapper.emitted('selection')[2]).toEqual([15])
    expect(wrapper.emitted('selection')[3]).toEqual([20])
  });
});

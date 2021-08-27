import pokemonApi from "../api/pokemonApi"

// *** Función para crear un arreglo de pokemons ***
const getPokemons = () => {
  // Creamos un arreglo con 650 posiciones
  const pokemonsArr = Array.from(Array(650))
  
  // Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
  return pokemonsArr.map((_, index) => index + 1)
}

// *** Función para hacer una mezcla aleatoria de todos los pokemons ***
const getPokemonOptions = async() => {
  // Hacemos que el arreglo de pokemons se muestre de manera aleatoria
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  
  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))

  return pokemons
}

const getPokemonNames = async([a, b, c, d] = []) => {
  // const resp = await pokemonApi.get(`/20`)
  // console.log(resp.data.name, resp.data.id);
  
  // Definiendo peticiones (Aún no las estamos mandando a llamar)
  const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ]

  // Pokemones destructurados
  const [p1, p2, p3, p4] = await Promise.all(promiseArr)

  return[
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ]
  
}

export default getPokemonOptions
import pokemonApi from "../api/pokemonApi"

// *** Función para crear un arreglo de pokemons ***
const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650)) // Creamos un arreglo con 650 posiciones

  return pokemonsArr.map((_, index) => index + 1) // Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
}

// *** Función para hacer una mezcla aleatoria de todos los pokemons ***
const getPokemonOptions = async() => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5) // Hacemos que el arreglo de pokemons se muestre de manera aleatoria
  
  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))

  return pokemons
}

const getPokemonNames = async([a, b, c, d] = []) => {
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
<template>
  <h1>¿Quién es este pokemón?</h1>
  <pokemon-picture
    :pokemonId="4"
    :showPokemon="true"></pokemon-picture
  >
  <pokemon-options></pokemon-options>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions';

console.log(getPokemonOptions());

export default {
  components: { PokemonPicture, PokemonOptions },

}
</script>

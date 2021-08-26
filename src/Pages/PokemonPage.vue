<template>
  <h1>¿Quién es este pokemón?</h1>

  <!-- TODO: Componente - Picture (Imagen) -->
  <pokemon-picture
    :pokemonId="4"
    :showPokemon="true"></pokemon-picture
  >

  <!-- TODO: Componente - Options (Opciones) -->
  <pokemon-options></pokemon-options>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
export default {
  components: { PokemonPicture, PokemonOptions },

}
</script>

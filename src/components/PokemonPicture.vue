<template>
  <div class="pokemon-container">
    <img v-if="!showPokemon" 
      :src="imgSrc"
      class="hidden-pokemon"
      alt="pokemon"/>

    <img v-else
      :src="imgSrc"
      class="fade-in"
      alt="pokemon"/>
    
  </div>
</template>

<script>

export default {
  props: {
    pokemonId:{
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }
  
};

</script>

<style scoped>

/* Pokemon Picture */

.pokemon-container {
  height: 150px;
}
img {
  height: 60%;
  margin-top: 15%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;

}
.hidden-pokemon {
  filter: brightness(0);
}

@media screen and (width: 320px) {
  img{
    height: 40%;
  }
}


@media screen and (min-width: 400px) {
  
  .pokemon-container {
    height: 200px;
  }
  img {
    height: 60%;
  }
}
</style>
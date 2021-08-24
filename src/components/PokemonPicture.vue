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
  height: 200px;
}
img {
  height: 200px;
  margin-left: -210px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}


@media (max-width: 800px) {
  
  img {
  height: 120px;
  margin-top: 40px;
  margin-left: -290px;
  }
}

@media (max-width: 400px) {
  img {
    margin-left: -325px;
  }
}
</style>
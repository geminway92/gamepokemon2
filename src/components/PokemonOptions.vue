<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons"
          :key="pokemon.id"
          @click="$emit( 'selection', pokemon.id )"
          class="list-individual">
          {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>

/* Pokemon Options */

ul {
  list-style-type: none;
  position: absolute;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: 290px;
  height: 30px;
  font-size: 1.5rem;
  position: relative;
  right: 1em;
}

li:hover {
  background-color: rgb(192, 192, 51);
}

.options-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  position:absolute;
  top: 8em;
}

@media screen and (width: 320px) {
  .options-container {
    top: 1em;
  }
}

@media screen and (width: 360px) and (max-height: 780px) {
  .options-container {
    transform: translate( 12px, -35px);
  }
}

@media screen and (min-width: 400px) {
  .options-container {
    transform: translate( 10px, 25px);
  }
  
}


@media screen and (min-width: 700px) {
  .options-container {
    transform: translate( 20px, 80px);  
  }
  
  ul {
    width: 80%; 
  }

  li {
    width: 100%;
    height: 50px;
    font-size: 2em;
    border: 2px solid rgb(221, 212, 212);
  }
}

@media screen and (min-width: 800px) {
  .options-container {
    transform: translateY( 150px);
  }

  li {
    height: 30px;
    font-size: 1.5em;
  }
}

@media screen and (min-width: 1000px) {
  .options-container {
    transform: translateY(0px);
  }
  
}
</style>
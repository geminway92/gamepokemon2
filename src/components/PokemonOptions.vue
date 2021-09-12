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
  margin: 50%;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: 290px;
  height: 30px;
  font-size: 1.5rem;
}

li:hover {
  background-color: rgb(192, 192, 51);
}

.options-container {
  display: flex;
  justify-content: center;
  height: 300%;
  margin-top: 180px;
}


</style>
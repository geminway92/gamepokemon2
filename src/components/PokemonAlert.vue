<template>
  <div  class="alert-container" >
       <h2 v-bind:style="{ color: activeColor}"  class="fade-in">{{ message }}</h2>
      <button v-if="lives > 0" @click="$emit('nextPokemon')">Siguiente</button>
      <button v-else @click="$emit('newGame')">Nuevo juego</button>
  </div>
</template>

<script>
export default {
    props: {
        message: String,
        activeColor: String,
        lives: Number
    } 
}
</script>

<style scoped>
.alert-container {
    position: absolute;
    background-color: rgb(248, 247, 247);
    border: 1px ridge black;
    margin: 86% 18%;
    width: 340px;
    height: 150px;
    color: black;
    z-index: 1;
}

.alert-container h2 {
    color: rgb(70, 196, 45);
}
</style>
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
    border: 5px solid #F8F7F7;
    box-shadow: 2px 2px 10px #5E5D5D;
    width: 100%;
    height: 150px;
    color: black;
    top: 6.8em;
    left: .2em;
    z-index: 1;
}

.alert-container h2 {
    color: rgb(70, 196, 45);
}

@media screen and (width: 320px ) {
    .alert-container{
        transform: translateY(-110px);
    }
}

@media screen and (min-width: 700px) {
    .alert-container {
        height: 180px;
        transform: translate(10px, 100px);
    }

    button{
        width: 120px;
        height: 40px;
        font-size: 1.5em;
    }
}

@media screen and (min-width: 1000px) {
    .alert-container {
        transform: translateY(0px);
    }
}
</style>
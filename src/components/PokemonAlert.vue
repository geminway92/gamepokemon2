
<template>
  <div  class="alert-container" >
       <h2 v-bind:style="{ color: activeColor}"  class="fade-in">{{ message }}</h2>
      <button @click="$emit('nextPokemon')">Siguiente</button>
  </div>
</template>

<script>
export default {
    props:  ["message", "activeColor"]
    

        
}
</script>



<style scoped>
.alert-container {
    position: absolute;
    background-color: rgb(248, 247, 247);
    border: 1px ridge black;
    margin-top: -480px;
    margin-left: -60px;
    width: 400px;
    height: 20%;
    color: black;
    z-index: 1;
}

.alert-container h2 {
    color: rgb(70, 196, 45);
}


@media (max-width: 800px) {
  .alert-container {
    margin-left: -23px;
    width: 250px;
    height: 100px;
    margin-top: -490px;
    margin-left: -20px;
  }

  .alert-container h2 {
    font-size: 20px;
  }
}

@media (max-width: 400px) {
  .alert-container {
    margin-left: -45px;
  }
}

</style>
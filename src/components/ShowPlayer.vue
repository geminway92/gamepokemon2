<template>
<div class="show-button-alway-container"
    v-if="!disabledTopPlayer">
    <button @click="disabledTopPlayer = !disabledToPlayer">Clasificación</button>
</div>

<div
  class="showplayer-container"
  v-if="disabledTopPlayer"
  >
    <h1>PUNTUACIÓN</h1>
  <ul>
      <li v-for="item in playerPoint"
            :key="item">  Nombre: <span class="name-player">{{item.name}} </span> Puntos: <span class="point-player">{{item.point}} <hr></span>
            </li>
  </ul>
  <button @click="disabledTopPlayer = !disabledTopPlayer ">Ocultar</button>
  
  <div v-if="registerPlayer" class="register-player-container">
    <input
        type="text"
        placeholder="Escribe tu nombre">
    <button>Registrar</button>
  </div>
</div>
</template>

<script>
export default {
    props: {
        playerPoint: {
            type: Object,
        },
        disabledTopPlayer: {
            type: Boolean,
            default: false
        },
        registerPlayer: {
            type:Boolean,
            default: false
        }
        
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}

li{
    margin-top: 5px;
    font-size: 1rem;
    color: white;
    margin-right: 15%; 
}

h1 {
    color: white;
}
.showplayer-container{
    background-color: grey;
    position: absolute;
    z-index: 1;
    width: 390px;
    height: 320px;
    transform: translate(45px);
    border: 1px solid black;
    margin-top: 20px;

}

.show-button-alway-container {
   transform: translate(210px, 0px);
   position: absolute;
}

.name-player {
    color: red;
    margin-left: 5%;
    padding-right: 10%;
}
.point-player {
    color: red;
    margin-left: 5%;
}



</style>
<template>
<div v-if="!openScoredModal" class="show-button-alway-container">
    <button @click="openScoredModal = true">Clasificación</button>
</div>

<div v-else
  class="showplayer-container"
  >
    <h1>PUNTUACIÓN</h1>
  <ul>
      <li v-for="item in playerPoint"
            :key="item">  Nombre: <span class="name-player">{{item.name}} </span> Puntos: <span class="point-player">{{item.point}} <hr></span>
            </li>
  </ul>
  <button v-if="!hiddenBottonModal" @click="openScoredModal = !openScoredModal">Ocultar</button>
  
  <div v-if="registerPlayer" class="register-player-container">
        
            <input
                type="text"
                placeholder="Escribe tu nombre"
                v-model="registerName"
            >
            <button @click="$emit ('postPlayerfire', registerName )" type="submit" >Registrar</button>
      
  </div>
</div>
</template>

<script>
export default {
    props: {
        playerPoint: {
            type: Object,
        },
        registerPlayer: {
            type:Boolean,
            default: false
        },
        openScoredModal: {
            type: Boolean,
            default: false
        },
        registerName: {
            type: Object,
        },
        hiddenBottonModal: {
            type: Boolean,
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
    z-index: 4;
    width: 390px;
    height: 320px;
    transform: translate(45px);
    border: 1px solid black;
    margin-top: 20px;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
    animation-name: expand-show-player;
    

}

.show-button-alway-container {
   transform: translate(210px, 0px);
   position: absolute;
}

.name-player {
    color: black;
    margin-left: 5%;
    padding-right: 10%;
}
.point-player {
    color: black;
    margin-left: 5%;
}

@keyframes expand-show-player{
    from {
        
        height: 320px;
        transform: translate(45px);

    }

    to {
        height: 650px;
    }
}


</style>
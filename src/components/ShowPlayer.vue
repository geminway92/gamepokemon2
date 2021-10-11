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
            :key="item"> <div class="title-score"> Nombre: <span class="content-score">{{item.name}} </span> </div>  <div class="title-score">  Puntos: <span class="content-score"> {{item.point}}</span> </div> 
            </li>
  </ul>
  <button v-if="!hiddenBottonModal" @click="openScoredModal = !openScoredModal">Ocultar</button>
  
  <div v-if="registerPlayer" class="register-player-container">
        
            <input
                type="text"
                placeholder="Escribe tu nombre"
                v-model="registerName"
                maxlength="10"
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
    display: flex;
    margin-top: 5px;
    font-size: 1rem;
    color: white;
    margin-right: 70px; 
    margin-top: 15px;
    justify-content:space-between;
}

h1 {
    color: white;
}
.showplayer-container{
    position: absolute;
    background-color: #CCCCCC;
    position: absolute;
    width: 100%;
    height: 650px;
    border: 1px solid CCCCCC;
    box-shadow: 6px 5px 15px;
    top: 0em;
    z-index: 2;
    padding-bottom: 1.5em;
}

.show-button-alway-container {
    position: absolute;
    left: 9em;
    top: 1em;
}

.title-score {
    color: #777777;
    font-size: 1rem;
}

.content-score {
    color: #E81123;
    font-size: 1rem;
    margin-left: 10px;
}

@media screen and (width: 320px) {
    .show-button-alway-container {
        left: 8em;
    }

    li {
        position: relative;
        margin: 0;
        right: 1.5em;
    }
}

@media screen and (min-width: 400px) {
  .show-button-alway-container {
      transform: translateX(35px);
  }
}

@media screen and (min-width: 700px) {
    .show-button-alway-container {
        transform: translate(220px, 50px);
    }

    .showplayer-container {
        transform: translate(100px);
        width: 600px;
        height: 80%;
    }
    .title-score {
        font-size: 1.5em;
    }

    .content-score {
        font-size: 1em;
    }
}

@media screen and (min-width: 1000px) {


    .show-button-alway-container {
        transform: translate(490px, 50px);
    }

    .showplayer-container {
        transform: translate(390px, 50px);
        width: 520px;
        height: 100%;
    }
}
@media screen and (min-width: 1200px) {
    .show-button-alway-container {
        transform: translate(510px, 50px);
    }
    
    .showplayer-container {
        width: 600px;
        transform: translate(400px, 50px);
    }
}

@media screen and (min-width: 1900px) {
    .show-button-alway-container {
        transform: translate(800px, 45px);
    }

    .showplayer-container {
        transform: translateX(690px);
        height: 75%;
    }
}


</style>
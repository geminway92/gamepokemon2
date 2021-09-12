<template> 

<div class="gameboy">

      <ShowPlayer
    :playerPoint="playerFirebase"
    :disabledTopPlayer="disabledTopPlayer"
    :registerPlayer="registerPlayer"/>

  <div class="screen-black"></div>
  <div class="screen-cristal"></div>

  <div class="point-live">
    <div class="point">
      <PokemonPoint
        :pokemonScore="pokemonPoint"
      />
    </div>
    <div class="live">
      <PokemonLive
      :lives="lives"/>  
      
    </div>

  </div>

  <h1 class="wait-message" v-if="!pokemon">Espere por favor...</h1>

  <div class="img-container" v-else>
    <h1>¿Quién es este pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
  </div>
  
  <div v-if="showAnswer">
      <PokemonAlert
        :activeColor="activeColor"
        :message="message"
        @nextPokemon="nextPokemon(false)"
        @newGame="nextPokemon(true)"
        :lives="lives"/>
  </div>

  <div class="allbuttoms">
    <div class="directionButtons">
        <div class="button-left">◀ </div>
        <div class="button-top">▲</div>
        <div class="button-right">▶</div>
        <div class="button-bottom">▼</div>
        <div class="button-center">⬤</div>
      </div>
    
      <div class="buttonA">A</div>
      <div class="buttonB">B</div>

    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />

    <div class="button-start">
      <p>START</p>
    </div>

    <div class="button-select">
          <p>SELECT</p>
    </div>
  </div>

</div>



  

</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonPoint   from "@/components/PokemonPoint.vue";
import PokemonAlert   from '@/components/PokemonAlert';
import PokemonLive    from '@/components/PokemonLive'

import getPokemonOptions from '../helpers/getPokemonOptions';
import pointPlayerApi from '../api/pointPlayerApi';
import ShowPlayer     from  '@/components/ShowPlayer.vue';

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
    PokemonPoint,
    PokemonAlert,
    PokemonLive,
    ShowPlayer,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
      pokemonPoint: 0,
      activeColor: '',
      disabledOptions: false,
      lives: 3,
      playerFirebase: [],
      disabledTopPlayer: false,
      registerPlayer: false
    }
  },
  
  methods: {

    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[ rndInt ]
    
    },

    checkAnswer( selecteId ) {

      if(this.disabledOptions === false) {

        this.showPokemon = true
        this.showAnswer = true
  
        if( selecteId === this.pokemon.id) {
          this.activeColor = 'green'
          this.message = `Correcto, era ${ this.pokemon.name }`
  
          this.sumPoint()
          this.disabledOptions = true
  
        } else {
          this.lives--
          this.message = this.lives > 0 ? `Oops, era ${ this.pokemon.name}` : `Fin de juego`;  
          this.activeColor = 'red'
          this.disabledOptions = true 

        }

      }
    },
    nextPokemon(isResetGame) {
  
      if(isResetGame) {
        this.lives = 3;
        this.pokemonPoint = 0
      }

      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
      this.disabledOptions = false
    },
    sumPoint() {
      
      if( this.disabledOptions === false) {

        this.record()
        
        this.pokemonPoint++
      }
    },

    record() {
      if( this.pokemonPoint === 500 ) {

        prompt('Que máquina eres Bro!!', 'Lo sé')
        
      }
    },

     //Esta hecho especificamente para la prueba, al hacer wrapper.vm checkAnswer deja activado el disabledOptions y no me cambia el mensaje de checkAnswer
    disabledOptionsWrapper() {
      this.disabledOptions = false
    },

    async getPlayerfire() {
      const {data} = await pointPlayerApi.get('/player.json')
    
      this.playerFirebase =  data

      console.log(this.playerFirebase)

    },

    // async postPlayerfire() {
      
    // }

    

  },

  created(){
    this.getPlayerfire()
  },

  mounted() {
    this.mixPokemonArray()
    this.$emit('newGame', this.newGame )
  }
  
};
</script>

<style scoped>


.gameboy {
  position: absolute;
  background-color: rgb(223, 223, 37);
  height: 730px;
  width: 500px;
  border-radius: 1rem;
  margin: 5% 0%;
  /* transform: translate(630px); */
}

.point-live {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.point {
  margin-left: 50px;
}
.live {
  margin-right: 33%;
  margin-top: 0%;
  gap: 5px;
  z-index: 1;
}

.screen-black {
  position: absolute;
  width: 400px;
  height: 45%;
  background-color: black;
  transform: translate(50px, 25px);
}

.screen-cristal {
  position: absolute;
  width: 340px;
  height: 290px;
  background-color: grey;
  transform: translate(80px, 40px);

}

.img-container {
  position: absolute;
  width: 500px;
}

.img-container h1 {
  font-size: 100%;
  z-index: 1;
  margin-right: 15px;
}

.wait-message {
  position: absolute;
  margin-left: 100px;
  font-size: 20px;
  z-index: 1;
}

.directionButtons {
  position: absolute;
  color: rgb(30, 30, 129);
  margin: 25% 15%;
}

.button-left {
  position: absolute;
  background-color: blue;
  width: 40px;
  height: 40px;
  margin-left: -40px;
  margin-top: 40px;
  font-size: 2rem;
}

.button-top {
  position: absolute;
  background-color: blue;
  width: 40px;
  height: 40px;
   font-size: 2rem;
}
.button-right {
  position: absolute;
  background-color: blue;
  width: 40px;
  height: 40px;
  margin-left: 40px;
  margin-top: 40px;
  font-size: 2rem;
  
}
.button-bottom {
  position: absolute;
  background-color: blue;
  width: 40px;
  height: 40px;
  margin-top: 80px;
   font-size: 2rem;
}
.button-center {
  position: absolute;
  background-color: blue;
  width: 40px;
  height: 45px;
  margin-top: 35px;
  font-size: 2rem;
  
}
.buttonA {
  position: absolute;
  background-color: green;
  border: 1px solid black;
  border-radius: 100%;
  font-size: 2rem;
  height: 40px;
  width: 40px;
  padding: 1%;
  margin: 25% 75%;
  
} 

.buttonB {
  position: absolute;
  background-color: red;
  border: 1px solid black;
  border-radius: 100%;
  font-size: 2rem;
  height: 40px;
  padding: 1%;
  width: 40px;
  margin: 35% 61%;
}

.button-start {
  position: absolute;
  width: 40px;
  height: 10px;
  border-radius: 100%;
  background-color: black;
  margin: 83% 60%;
}

.button-select {
  position: absolute;
  width: 40px;
  height: 10px;
  border-radius: 100%;
  background-color: black;
  margin: 83% 40%;
}

p {
  margin-left: -10%;
}

@media (min-width: 524px){

.gameboy{
  width: 500px;
  height:740px;
  margin-left: 70px;
}

}

@media(min-width: 760px) {
  .gameboy {
    margin-left: 150px;

  }
}

@media(min-width: 858px) {
  .gameboy {
    margin-left: 180px;

  }
}

@media(min-width: 966px) {
  .gameboy {
    margin-left: 250px;

  }
}

@media(min-width: 1136px) {
  .gameboy {
    margin-left: 300px;

  }
}

@media(min-width: 1308px) {
  .gameboy {
    margin-left: 400px;

  }
}

@media(min-width: 1408px) {
  .gameboy {
    margin-top: 10px;
    margin-left: 600px;

  }
}

</style>

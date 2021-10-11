<template> 

<div class="gameboy">


  </div>
    
  <ShowPlayer
    :playerPoint="playerFirebase"
    :openScoredModal="openScoredModal"
    :registerPlayer="registerPlayer"
    @postPlayerfire="postPlayerfire"
    :registerName="registerName"
    :hiddenBottonModal="hiddenBottonModal"/>

  <div class="screen-black">
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
    <div class="screen-cristal">
      <h1 class="wait-message" v-if="!pokemon">Espere por favor...</h1>

      <div class="img-container" v-else>
        <h1>¿Quién es este pokémon?</h1>

        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      </div>
    </div>
  </div>


  
  <div class="container-buttons">

    <div v-if="showAnswer">
        <PokemonAlert
          :activeColor="activeColor"
          :message="message"
          @nextPokemon="nextPokemon(false)"
          @newGame="nextPokemon(true)"
          :lives="lives"/>
    </div>
    <div class="directionButtons">
        <div class="button-left"></div>
        <div class="button-top"></div>
        <div class="button-right"></div>
        <div class="button-bottom"></div>
        <div class="button-center"></div>
      </div>

      <div class="buttons-AB">
        <div class="buttonA">A</div>
        <div class="buttonB">B</div>
      </div>

      <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />
    <div class="button-select-container">
      <div class="button-start">
        <p>START</p>
      </div>

      <div class="button-select">
            <p>SELECT</p>
      </div>
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
      openScoredModal: false,
      registerPlayer: false,
      registerName: null,
      hiddenBottonModal: false,
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
        if( this.pokemonPoint > 0 ) {
          
          this.openScoredModal = true
          this.hiddenBottonModal = true
          this.registerPlayer = true


        } else {
          this.lives = 3;
          this.pokemonPoint = 0
        }
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

        this.pokemonPoint++
      }
    },

     //Esta hecho especificamente para la prueba, al hacer wrapper.vm checkAnswer deja activado el disabledOptions y no me cambia el mensaje de checkAnswer
    disabledOptionsWrapper() {
      this.disabledOptions = false
    },

    async getPlayerfire(  ) {
      const {data} = await pointPlayerApi.get('/player.json' )

      if ( !data ) {
        this.playerFirebase = []
        return
      }
      
        for ( let id of Object.keys( data )) {
          this.playerFirebase.push({
            id,
            ...data[id]
          })
        }

      this.orderPoint()

    },

    orderPoint() {
      this.playerFirebase.sort( (a,b) => b.point - a.point)
  
    },
      
    async postPlayerfire( nameUser ) {


      this.openScoredModal = !this.openScoredModal

      const newPlayerRecord = {
        name: nameUser,
        point: this.pokemonPoint
      }
       
      this.openScoredModal = !this.openScoredModal
      this.registerPlayer = !this.registerPlayer

      
      this.registerName = null

    
      
      this.playerFirebase.push( newPlayerRecord )
      this.deleteLastPlayer()
      const {data} = await pointPlayerApi.post('/player.json',newPlayerRecord)
      this.orderPoint()

      this.lives = 3;
      this.pokemonPoint = 0
      this.hiddenBottonModal = false
      
       
    },


    async deleteLastPlayer( ) {

      if( this.playerFirebase.length > 4 ) {
        
        // Selecciona el penúltimo elemento del array
        const id = this.playerFirebase[ this.playerFirebase.length-2].id

        await pointPlayerApi.delete(`/player/${id}.json`)
        
        this.playerFirebase = []
        this.getPlayerfire()
        
        

      }
      return

    }
    

  },
  
  created() {
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
  display: flex;
  background-color: rgb(223, 223, 37);
  flex-direction: column;
  justify-content: start;
  /* min-width: 100vw; */
  min-height: 700px;
  border-radius: 1rem;
}

.point-live {
  width: 100%;
  height: min-content;
}

 
.screen-black {
  position: absolute;
  width: 80%;
  height: 38%;
  background-color: black;
  top: 3em;
  left: 2.8em;

}

.screen-cristal {
  position: relative;
  width: 80%;
  height: 80%;
  background-color: grey;
  top: 1.5em;
  left: 2em;
}


.img-container h1,
.wait-message {
  font-size: 1em;
  position: relative;
  top: 1.5em;
  margin: auto;
}

.wait-message {
  height: 200px;
}

.container-buttons {
  position: absolute;
  width: 100%;
  height: min-content;
  top: 19em;
  left: .1em;
}


.directionButtons {
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

.button-left {
  width: 35px;
  height: 35px;
  border: 4px solid var(--button-blue);
  box-shadow: 0px 5px 5px #2E3345;
  border-top-color: #616D92;
  background-color: var(--button-blue);
  cursor: pointer;
  grid-column: 1;
  grid-row: 2;
}

.button-left:active {
  border-top-color: var(--button-blue);
  box-shadow: none;
}

.button-top {
  background-color: var(--button-blue);
  border: 4px solid var(--button-blue);
  border-top-color: #616D92;
  width: 35px;
  height: 35px;
  cursor: pointer;
  grid-column: 2;
}

.button-top:active {
  border-top-color: var(--button-blue);
}

.button-right {
  position: relative;
  background-color: var(--button-blue);
  border: 4px solid var(--button-blue);
  box-shadow: 0px 5px 5px #2E3345;
  border-top-color: #616D92;
  width: 35px;
  height: 35px;
  cursor: pointer;
  grid-column: 3;
  grid-row: 2;
}

.button-right:active {
  border-top-color: var(--button-blue);
  box-shadow: none;
}

.button-bottom {
  background-color: var(--button-blue);
  box-shadow: 0px 5px 5px #2E3345;
  width: 35px;
  border: 4px solid var(--button-blue);
  height: 35px;
  cursor: pointer;
  grid-column: 2;
  grid-row: 3;
}

.button-bottom:active {
  box-shadow: none;
}

.button-center {
  background-color: var(--button-blue);
  border: 4px solid var(--button-blue);
  width: 35px;
  height: 35px;
  cursor: pointer;
  grid-column: 2;
  grid-row: 2;
  position: absolute;
}

.buttons-AB {
  position: absolute;
  display: flex;
  width: 50%;
  height: min-content;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10% 58%;
}

.buttonA {
  background-color: #05A05F;
  border-top: 4px solid #3ABC86;
  border-radius: 100%;
  font-size: 2rem;
  height: 40px;
  width: 40px;
  padding: 1%;
  cursor: pointer;
} 

.buttonA:active {
  border-top: #05A05F;
}

.buttonB {
  position: relative;
  background-color: #E61631;
  border-top: 4px solid #EF2B47;
  border-radius: 100%;
  font-size: 2rem;
  height: 40px;
  padding: 1%;
  width: 40px;
  cursor: pointer;
  bottom: .5em;
}

.buttonB:active {
  border-top: #E61631;
}

.button-select-container {
  position: absolute;
  display: flex;
  flex-direction: row;
  width: min-content;
  height: 40px;
  top: 18em;
  left: 6em;
}

.button-start {
  width: 40px;
  height: 10px;
  border-radius: 100%;
  border: 2px solid;
  border-top-color: #F8F7F7;
  background-color: black;
  margin-right: 1.5em;
  font-size: .7em;
}

.button-select {
  width: 40px;
  height: 10px;
  border-radius: 100%;
  background-color: black;
  font-size: .7em;
  border: 2px solid;
  border-top-color: #F8F7F7;
}

.button-start:active, 
.button-select:active {
  border-top-color: black;
}
@media screen and (width: 320px) {
 
 .gameboy {
   max-width: 100vw;
   min-height: 550px;
 }

.screen-black {
  width: 90%;
  height: 50%;
  top: 3em;
  left: 1.5em;

}

.screen-cristal {
  width: 80%;
  height: 180px;
  background-color: grey;
}

.directionButtons {
  margin: 0;
  transform: translate(1.5em, -4em);
}

.button-top,
.button-left,
.button-right,
.button-top,
.button-center,
.button-bottom {
  width: 20px;
  height: 20px;
}

.buttons-AB {
  transform: translate(-1.5em, -4em);
}

.buttonA,
.buttonB {
  width: 25px;
  height: 25px;
  font-size: 1em;
}

.button-select-container {
  top: 11em;
}

}

@media screen and (width: 360px) and (max-height: 780px) {
  .gameboy {
    min-height: 660px;
  }

  .directionButtons{
    transform: translateY(-30px);
  }
  
  .button-top,
  .button-left,
  .button-right,
  .button-top,
  .button-center,
  .button-bottom {
    width: 30px;
    height: 30px;
  }
  
  .buttonA,
  .buttonB {
    width: 30px;
    height: 30px;
    font-size: 1em;
  }


  .buttons-AB {
    transform: translateY(-40px);
  }
  
  .button-select-container {
    transform: translateY( -20px);
  }
}

@media screen and (min-width: 400px) {

  .directionButtons {
    transform: translatey(20px);
  }
  .button-select-container {
    transform: translate( 20px, 20px);
  }
}

@media screen and (min-width: 700px){
   .gameboy {
   width: 600px;
   min-height: 850px;
   margin: 0% 10%;
   transform: translate(15px, 50px);
 }
  
  .screen-black {
    width: 460px;
    margin-left: 100px;
    transform: translate(35px, 50px);
  }
  
  .screen-cristal {
    width: 390px;
    height: 300px;
  }

  .directionButtons {
    transform: translateY(60px);
  }
  .buttons-AB {
    transform: translate(-20px, 40px);
  }

  .button-select-container {
    transform: translate(90px, 170px);
  }


}

@media screen and (min-width: 800px)  {

  .gameboy {
    min-height: 930px;
  }
  .directionButtons {
    transform: translateY(150px);
  }
  .buttons-AB {
    transform: translate(-20px, 130px);
  }

  .button-select-container {
    transform: translate(90px, 170px);
  }

}

@media screen and (min-width: 1000px) {
    .gameboy {
      width: 500px;
      min-height: 680px;
      margin-left: 10%;
      transform: translate(275px, 50px);
    }

    .screen-black {
      width: 400px;
      height: 260px;
      transform: translate(340px, 50px);
    }

    .screen-cristal {
      width: 340px;
      height:200px;
    }

    .directionButtons {
      transform: translate( 20px, -15px);
      margin-left: 0;
    }
    
    .buttons-AB {
      transform: translate( -15px, -40px);
    }

    .button-select-container {
      transform: translate(50px, 10px);
    }
}

@media screen and (min-width: 1200px) {
  .gameboy {
      width: 550px;
      transform: translate(290px, 50px);
  }

  .screen-black {
    transform: translate(365px, 50px);
  }
  .container-buttons {
    transform: translate(0px);
  }


}
@media screen and (min-width: 1900px) {
  .gameboy {
    transform: translate(500px, 40px);
  }
  
  .screen-black {
    transform: translate(630px, 40px);
  }
  
}
</style>

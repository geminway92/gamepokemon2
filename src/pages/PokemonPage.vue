<template> 
  <div class="gameboy">
    <div class="screen-black"></div>
    <div class="screen-cristal"></div>
    <PokemonPoint
      :pokemonScore1="pokemonPoint1"
      :pokemonScore2="pokemonPoint2"
    />
    <h1 class="wait-message" v-if="!pokemon">Espere por favor...</h1>

    <div class="img-container" v-else>
      <h1>¿Quién es este pokémon?</h1>

      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
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

      <div v-if="showAnswer">
      <PokemonAlert
        :activeColor="activeColor"
        :message="message"
        @nextPokemon="newGame"/>
      </div>

        <div class="button-start"></div>
        <div class="button-select"></div>

        <div class="button-select-start">
        <p>SELECT</p>
        <p>START</p>

        </div>

    </div>
  </div>
</template>


<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonPoint   from "@/components/PokemonPoint.vue";
import PokemonAlert   from '@/components/PokemonAlert';

import getPokemonOptions from '../helpers/getPokemonOptions';


export default {

  components: {
    PokemonOptions,
    PokemonPicture,
    PokemonPoint,
    PokemonAlert,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
      pokemonPoint1: 0,
      pokemonPoint2: 0,
      activeColor: '',
      disabledOptions: false
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[ rndInt ]
      console.log(this.pokemon)
    
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
          this.activeColor = 'red'
          this.message = `Oops, era ${ this.pokemon.name}`
          this.disabledOptions = true
        
        }


      }
    },
    newGame() {
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
        
        if(this.pokemonPoint2 < 9) {
          this.pokemonPoint2++
        
        } else {
          
          this.pokemonPoint1++
          this.pokemonPoint2 = 0
        }
      }
    },

    record() {
      if( this.pokemonPoint1 === 9 && this.pokemonPoint2 === 9  ) {

        this.pokemonPoint1 = 0
 
        prompt('Que máquina eres Bro!!', 'Lo sé')
        
        this.pokemonPoint2 = -1
        
      }
    
  
    },
      
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
  height: 700px;
  width: 30%;
  border-radius: 1rem;
  margin-left: 30%;
}

.screen-black {
  position: absolute;
  width: 80%;
  height: 50%;
  background-color: black;
  margin-top: 40px;
  margin-left: 50px;
}

.screen-cristal {
  position: absolute;
  width: 65%;
  height: 40%;
  background-color: grey;
  margin-top: 60px;
  margin-left: 90px;

}

.img-container {
  position: absolute;
  margin-top: -100px;
  margin-left: 22%;
  width: 500px;

}

.img-container h1 {
  font-size: 100%;
  margin-top: 0px;
  margin-left: -210px;
}

.wait-message {
  position: absolute;
  margin-top: -10%;
  margin-left: 23%;
  font-size: 20px;
}

.directionButtons {
  position: relative;
  color: rgb(30, 30, 129);
  margin-left: -50px;
  margin-top: 100px;
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
  display: inline;
  font-size: 2rem;
  height: 30px;
  width: 30px;
  padding: 10px;
  margin-left: 50px;
  margin-top: -5px;
  
}
.buttonB {
  position: absolute;
  background-color: red;
  border: 1px solid black;
  border-radius: 100%;
  display: inline;
  font-size: 2rem;
  height: 30px;
  padding: 10px;
  width: 30px;
  margin-left: -20px;
  margin-top: 25px;
}

.button-start {
  position: absolute;
  width: 10%;
  height: 2%;
  border-radius: 100%;
  background-color: black;
  margin-left: 180px;
}

.button-select {
  position: absolute;
  width: 10%;
  height: 2%;
  border-radius: 100%;
  background-color: black;
  margin-left: 90px;
}

.button-select-start {
  height: 10%;
  margin-top: 20px;
  margin-left: -180px;
}
.button-select-start p {
  display: inline;
  position: relative;
  margin: 20px;
  

}

@media (max-width: 1528px) {
  .gameboy {
    height: 700px;
    width: 500px;
  }

}



@media (max-width: 800px) {
  .gameboy {
    background-color: rgb(223, 223, 37);
    width: 400px;
    height: 700px;
    margin-top: 5%;
  }

  .screen-black {
    width: 289px;
    height: 300px;
    margin: 50px 0px 0px 50px;
  }

  .screen-cristal {
    width: 250px;
    height: 220px;
    margin: 80px 70px;
  }
  
  .img-container h1 {
    font-size: 15px;
    margin-top: 0px;
    margin-left: -290px;
  }

  .wait-message {
    font-size: 15px;
    margin: 0px 120px 0px 125px;
  }

  .directionButtons {
    margin: 55px 0px 0px -20px;
  }

  .buttonA {
    margin-top: 10px;
    margin-left: -30px;
    
  }

  .buttonB {
    margin-top: 55px;
    margin-left: -100px;
  }

  .button-select-start {
    margin-left: -250px;
  }

  .button-select {
    margin-left: 55px;
  }

  .button-start {
    margin-left: 150px;
  }

} 

@media  (max-width: 400px) {

  .gameboy {
    background-color: rgb(223, 223, 37);
    width: 300px;
    height: 700px;
    margin-top: -8%;
  }
  
  .screen-black {
    width: 254px;
    height: 300px;
    margin: 50px 0px 0px 20px;
  }

  .screen-cristal {
    width: 80%;
    height: 220px;
    margin: 80px 28px;
  }

  .img-container h1 {
    font-size: 15px;
    margin-top: 0px;
    margin-left: -335px;
  }

  .wait-message {
    font-size: 15px;
    margin-top: -100px;
    margin-left: 100px;
  }

  .directionButtons {
    margin: 55px 0px 0px -10px;
  }

  .button-left{
    height: 20px;
    width: 20px;
    font-size: 20px;
    padding-bottom: 5px;
    margin-left: -19px;
  }

  .button-top{
    height: 20px;
    width: 20px;
    font-size: 20px;
    padding-bottom: 5px;
    margin-top: 16px;
    margin-left: 0px;
  }
  .button-right{
    height: 20px;
    width: 20px;
    font-size: 20px;
    padding-bottom: 5px;
    padding-bottom: 5px;
    margin-left: 19px;
  }

  .button-bottom{
    height: 20px;
    width: 20px;
    font-size: 20px;
    padding-bottom: 5px;
    margin-top: 64px;
    margin-left: 0px;
  }

  .button-center{
    height: 20px;
    width: 20px;
    font-size: 20px;
    padding-bottom: 5px;
    margin-top: 40px;
    margin-left: 0px;
  }

  .buttonA {
    width: 20px;
    height: 20px;
    font-size: 20px;
    margin-left: -80px;
    margin-top: 5px;
  }

  .buttonB {
    width: 20px;
    height: 20px;
    font-size: 20px;
    margin-left: -120px;
    margin-top: 10%;
  }

  .options-container {
    width: 10%;
    height: 10%;
    margin-left: 10%;
  }
  
  .button-select{
    margin-top: -3px;
    margin-left: 25px;
  }

  .button-start{
    margin-top: -3px;
    margin-left: 100px;
  }

  .button-select-start {
    font-size: 10px;
    margin-top: 15px;
    margin-left: -325px;
  }

}





</style>

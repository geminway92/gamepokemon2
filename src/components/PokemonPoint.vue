import PokemonPoint from '@/components/PokemonPoint';
<template>
    <div class="score-container">
        <h1>PUNTOS</h1>

        <div class="scored">
        <p>{{pokemonScore1}}</p>
        <p>{{pokemonScore2}}</p>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        pokemonScore1: {
            type: Number,
            default: 0,
        },
        pokemonScore2: {
            type: Number,
            default: 0,
        },
        pokemonScore3: {
            type: Number,
            default: 0
        },
        showCounter3: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style scoped>


.score-container {
    position: relative;
    top: auto;
    height: 25%;

}

.score-container p{
    display: inline-flex;
    background-color: rgba(243, 233, 233, 0.856);
    border: 2px solid white;
    color: black;
    font-size: 30px;
    margin-top: 37px;
}

.scored {
    margin: -95px;
    
}
.score-container h1 {
    margin-top: 0px;
    margin-left: -250px;
}


@media (max-width: 800px) {
    .score-container p {
        font-size: 20px;
        margin-top: 68px;
    }

    .score-container h1 {
        margin: 10px 150px 0px 0px;
        font-size: 25px;
    }

}
</style>
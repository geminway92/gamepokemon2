<template>
    <div class="score-container">
        <h1>PUNTOS:</h1>
        <p>{{pokemonScore}}</p>
    </div>
</template>

<script>
export default {
    props: {
        pokemonScore: {
            type: Number,
            default: 0,
        },
    },
}
</script>

<style scoped>


.score-container {
    position: absolute;
    display: flex;
    width: 40%;
    height: 2.5em;
    flex-direction:row;
    top: 1.2em;
    left: 2.2em;
    z-index: 1;
    gap: .3em;
}


p{
    bottom: .7em;
    position: relative;
    font-size: 1.2em;
}


.score-container h1 {
    font-size: 14px;
}


</style>
<template>
    <div class="score-container">
        <h1>PUNTOS:</h1>

        <div class="scored">
        <p>{{pokemonScore}}</p>

        </div>
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
    height: 25%;
    margin-left: 10% ;
    margin-top: -8px;
}

.score-container p{
    font-size: 19px;
 
}

.scored {
    margin-top: -13px;
    margin-left: 10px;
    
}
.score-container h1 {
    font-size: 14px;
}


</style>
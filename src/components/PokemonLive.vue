<template>
  <div class="live">
    <ul>
      <li v-for="item in lives"
      :key="item.length">
        <i class="fas fa-heart heart-left"></i>
      </li>
    </ul>
    
    
      
  </div>
</template>

<script>
export default {
  props: {
    lives: Number,
  }
}
</script>

<style scoped>

ul {
  display: flex;
  list-style-type: none;
}

.live {
    position: absolute;
    top: .6em;
    left: 10.2em;
    padding:  0px 5px;
    color: rgba(255, 0, 0, 0.541);
    z-index: 1;

}
@media screen and (min-width: 700px) {
  .live {
    left: 19em;
  }
}
@media screen and (min-width: 1000px) {
  .live {
    transform: translateX(-40px);
  }
}


</style>
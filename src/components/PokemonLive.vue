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
  margin-top: 10%;
}

.live {
    display: flex;
    position: inherit;
    margin-right: 33%;
    margin-top: -22%;
    margin-left: 65%;
    padding:  0px 5px;
    color: rgba(255, 0, 0, 0.541);
}


</style>
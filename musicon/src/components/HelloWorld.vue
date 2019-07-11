<template>
  <div class="hello">
      <template v-for="artist in artists">
    
          {{artist}}
            <!-- Cuando un hijo emita un evento checked se ejecutara la fn handleList dentro de methods ya que es un evento -->
        </template>
  </div>
    
</template>

<script>

export default {
  name: 'HelloWorld',
  props: ['artists']
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

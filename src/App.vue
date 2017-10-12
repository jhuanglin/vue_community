<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>

<style>
html{
  font-size: 62.5%;
  margin: 0;
}

body{
  margin: 0;
}

#app {
  font-family: 'Helvetica-Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  box-sizing: border-box;
}

</style>

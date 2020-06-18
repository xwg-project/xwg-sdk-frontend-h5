<template>
  <div id="app">
  <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
*{margin: 0; padding: 0;}
li ol { list-style: none; }
#app {
  font-family: 'Avenir', Helvetica, Arial, -apple-system, PingFangSC-Semibold, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f5f5;
}
</style>

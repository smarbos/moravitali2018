<template>
  <b-container fluid class="bv-example-row" id="app">
    <link href="https://fonts.googleapis.com/css?family=Overpass" rel="stylesheet">
      <b-row>
          <b-col lg="2" md="12" id="sidebar">
            <sidebar-menu></sidebar-menu>
          </b-col>
          <b-col lg="10" md="12" id="main">
            <router-view></router-view>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import sidebarMenu from './components/sidebarMenu.vue'
export default {
  name: 'app',
  components: {
    sidebarMenu
  }
}
</script>

<style lang="scss">

a, a:hover, a:active, a:visited, a:link {
  text-decoration: none;
  color: black; }

#main {
  text-align: left;
  h2 {
    margin-bottom: 1em;
  }
}

#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
}

</style>

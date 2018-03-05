<template>
  <b-row id="sidebarMenu">
    <b-col>
        <h1>
          <span id="menuButton" @click="switchMenu">[|||]</span>
          &nbsp;
          <router-link
          to="/">
          {{ tittle }}
        </router-link>
        {{menuDisplay}}
        </h1>

      <ul class="menuList" v-bind:class="{ 'menu-closed': menuDisplay, 'menu-opened': !menuDisplay }">
        <menu-element
          v-for="menuElement in sideMenuElements"
          :displayName="menuElement.name"
          :childs="menuElement.childs">
        </menu-element>
      </ul>
    </b-col>
  </b-row>

</template>

<script>
import menuElement from './menuElement.vue'
export default {
  name: 'sidebarMenu',
  props: ['items'],
  data: () => {
    return {
      tittle: 'asdas',
      sideMenuElements: [],
      menuDisplay: false
    }
  },
  components: {
    menuElement
  },
  created: function() {
    this.tittle = this.getTittle();
    this.sideMenuElements = this.getSideMenu();
  },
  methods: {
    switchMenu: function() {
      this.menuDisplay = !this.menuDisplay;
    },
    getTittle: function() {
      return this.$store.state.tittle;
    },
    getSideMenu: function() {
      return this.$store.state.sideMenu;
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 600px) {
  // ACA ES GRANDE
  #mobileMenu {
    display: none;
    background-color: blue;
  }
  .menuList{
    display: block;
    background-color: orange;
  }
  #menuButton {
    display: none;
  }

}


@media screen and (max-width: 1024px) {
  // ACA ES CHIQUITO

  #mobileMenu {
    display: block;
    background-color: red;
  }
  .menuList{
    ul {
    }
    &.menu-opened {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      font-size: 2.5rem;
      height: 100vh;
      z-index: 99;
    }
    &.menu-closed {
      display: none;
    }
  }
  #sidebarMenu {
    h1, .h1 {
      font-size: 8.5rem;
    }
    background-color: purple;
  }

  #sidebarMenu ul {
    padding-top: 5em;
  }

  #menuButton {
    display: inline;
    z-index: 999;
    position: absolute;
    margin-bottom: 5em;
  }

}

#sidebar {
  h1 {
    text-align: left;
    padding-left: 40px;
  }
  a {
    color: black;
  }
  ul {
    padding: 0px;
    text-decoration: none;
    list-style-type: none;
    color: inherit;
    text-align: left;
  }
  ul ul {
    padding-left: 10px;
  }
  li {
    padding-left: 40px;
    display: block !important;
  }
}

</style>

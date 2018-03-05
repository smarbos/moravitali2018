<template>
  <div id="galeria">
    <slide v-for="slideData in portfolioData"
    :type="slideData.type"
    :tittle="slideData.tittle"
    :content="slideData.content"></slide>
  </div>
</template>

<script>
import slide from '../components/slide.vue'
export default {
  name: 'portfolio',
  components: {
    slide
  },
  data () {
    return {
      portfolioData: [],
      ref: ''
    }
  },
  watch: {
    $route: function (val) {
      this.displayPortfolio(val.query.ref);
    }
  },
  mounted: function() {
    this.displayPortfolio(this.$route.query.ref || this.$store.state.secciones.portfolio[0].ref);
  },
  methods: {
    getPortfolioDataByRef: function(ref) {
      let data = this.$store.state.secciones.portfolio.find(portfolioData => portfolioData.ref === ref);
      return data.items;
    },
    displayPortfolio: function(ref) {
      this.portfolioData = this.getPortfolioDataByRef(ref)
    }
  }
}
</script>

<style lang="scss">
#galeria,
#publicaciones {
  display: inline-flex; }
  #galeria .slide,
  #publicaciones .slide {
    width: auto;
    margin: 5px;
    min-width: 20vw; }
    #galeria .slide img,
    #publicaciones .slide img {
      height: 70vh; }
    #galeria .slide h5,
    #publicaciones .slide h5 {
      padding-right: 20px;
      padding-top: 20px; }
    #galeria .slide h6,
    #publicaciones .slide h6 {
      padding-right: 20px; }
</style>

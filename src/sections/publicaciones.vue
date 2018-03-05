<template>
  <div id="publicaciones">
    <slide v-for="slideData in publicacionesData"
    :tittle="slideData.titulo"
    :link="slideData.link"
    :imgUrl="slideData.img"
    :content="slideData.link"></slide>
  </div>
</template>

<script>
import slide from '../components/slide.vue'
export default {
  name: 'publicaciones',
  components: {
    slide
  },
  data () {
    return {
      publicacionesData: this.getPublicaciones()
    }
  },
  methods: {
    getPublicaciones: function(ref) {
      let data = this.$store.state.secciones.publicaciones;
      return data;
    }
  }
}
</script>

<style lang="scss">
#galeria,
#publicaciones {
  .col-sm-6.image {
    max-width: 100% !important;
  }
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
#publicaciones .slide h2 {
  color: #f5f5f5;
  position: absolute;
  bottom: 15px;
  left: 15px;
  margin: 15px;
  margin-left: 30px; }
#publicaciones .slide .overlay {
  background-color: black;
  position: absolute;
  top: 0;
  left: 15px;
  right: 15px;
  bottom: 0;
  opacity: 0.5; }
#publicaciones .slide img {
  filter: grayscale(100%) saturate(-50) hue-rotate(320deg);
  -webkit-filter: grayscale(100%) saturate(-50) hue-rotate(320deg); }
</style>

<template>
  <div id="cv">
    <h2>CV / Seleccion de muestras</h2>
    <cv-items :items="this.$store.state.secciones.cv">
    </cv-items>
  </div>
</template>

<script>
import cvItems from '../components/cvItems.vue'
export default {
  name: 'cv',
  components: {
    cvItems
  }
}
</script>

<style lang="scss">

</style>

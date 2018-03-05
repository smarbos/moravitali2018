<template>
  <b-row id="main">
    <b-col class="col-sm-12">
      <b-img src="src/assets/cartasOdioAmenazasAmor.jpg" fluid id="mainImg" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      content: 'main main main main'
    }
  }
}
</script>

<style lang="scss" scoped>
#mainImg {
  display: block;
  position: relative; }
</style>

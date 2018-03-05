<template>
  <div id="publication">
    <b-col
      class="col-sm-6 slide image">
      <b-row>
        <b-col class="col-sm-12">
          <a v-if="link" :href="link" target="_blank">
            <div class="overlay"></div>
            <img :src="'../src/assets/publicaciones/'+imgUrl" :alt="tittle" width="auto" height="auto">
            <h2>{{ tittle }}</h2>
          </a>
        </b-col>
      </b-row>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'publication',
  props: ['id', 'tittle', 'link', 'imgUrl']
}
</script>

<style lang="scss">
</style>

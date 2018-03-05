<template>
  <div id="slide">
    <b-col
      class="col-sm-6 slide text"
      v-if="type === 'img'">
      <b-row>
        <b-col class="col-sm-12">
          <b-img :src="'../src/assets/portfolio/'+content" :alt="tittle" />
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-sm-12 text-right">
          <h5>{{ tittle }}</h5>
        </b-col>
      </b-row>
    </b-col>
    <b-col
      class="col-sm-6 slide text"
      v-if="type === 'txt'">
      <b-row>
        <b-col class="col-sm-12">
          <h2>{{ tittle }}</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-sm-12">
          <p v-html="content"></p>
        </b-col>
      </b-row>
    </b-col>

    <b-col
      class="col-sm-6 slide image"
      v-if="!type">
      <b-row>
        <b-col class="col-sm-12">
          <a v-if="link" :href="link" target="_blank">
            <div class="overlay"></div>
            <b-img :src="'../src/assets/publicaciones/'+imgUrl" :alt="tittle" />
            <h2>{{ tittle }}</h2>
          </a>
        </b-col>
      </b-row>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'slide',
  props: ['type', 'content', 'tittle', 'link', 'imgUrl']
}
</script>

<style lang="scss">
</style>

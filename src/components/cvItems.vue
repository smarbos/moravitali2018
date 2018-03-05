<template>
  <div id="cvItems">
    <div v-for="item in items">
      <span>
        <strong>{{item.anio}}</strong>
        <p v-for="_item in item.items">&nbsp;&nbsp;&nbsp; // {{_item.nombre}}</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cvItems',
  props: ['items']
}
</script>

<style lang="scss">
</style>

<template>
  <span>
    <li>
      <router-link
        v-b-toggle="displayName"
        :to="{ path: displayName, query: { ref: null }}">
        <strong>{{displayName}}</strong>
      </router-link>
    </li>
    <ul>
      <b-collapse
        v-for="subMenuElement in childs"
        :id="displayName">
        <li>
          <router-link
            :to="{ path: displayName, query: { ref: subMenuElement.ref }}">
            {{subMenuElement.name}}
          </router-link>
        </li>
      </b-collapse>
    </ul>
  </span>
</template>

<script>
export default {
  name: 'menuElement',
  props: ['displayName', 'childs']
}
</script>

<style lang="scss">

</style>

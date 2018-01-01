<template>
  <div class="ssr">
    <ssr-image :src="'CatPhoto.jpg'" :ratio="8/10"/>
    <h1>Sevgiyle calisiyoruz</h1>
  </div>
</template>

<script>
import SSRImage from '../components/SSRImage.vue'
export default {
  name: 'ssr',

  components: {
    'ssr-image': SSRImage
  },

  props: {
  },

  computed: {
  },

  beforeMount () {
  },

  beforeDestroy () {
  },

  watch: {
  },

  methods: {
  }
}
</script>

<style lang="stylus">
</style>

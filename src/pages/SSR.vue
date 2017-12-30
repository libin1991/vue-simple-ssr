<template>
  <div class="ssr">
    <ssr-image :src="'../assets/images/CatPhoto.jpg'"/>
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
    this.$bar.finish()
  },

  beforeDestroy () {
    this.$bar.start()
  },

  watch: {
  },

  methods: {
  }
}
</script>

<style lang="stylus">
</style>

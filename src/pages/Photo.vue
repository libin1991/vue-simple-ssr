<template>
  <div class="photo">
    <lazy-container :src="'https://unsplash.it/1920/1080?image=12'"/>
  </div>
</template>

<script>
import LazyContainer from '../components/LazyContainer.vue'
export default {
  name: 'photo',

  components: {
    LazyContainer
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

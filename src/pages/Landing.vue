<template>
  <div class="landing">
    <lazy-container :src="'https://unsplash.it/1920/1080?image=10'"/>
  </div>
</template>

<script>
import LazyContainer from '../components/LazyContainer.vue'
export default {
  name: 'landing',
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
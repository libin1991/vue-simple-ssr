<template>
  <div class="overview">
    <infinity-grid/>
  </div>
</template>

<script>
import InfinityGrid from '../components/InfinityGrid.vue'
export default {
  name: 'overview',

  components: {
    InfinityGrid
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

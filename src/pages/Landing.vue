<template>
  <div class="landing">
    <h1>Landing is here</h1>
  </div>
</template>

<script>
export default {
  name: 'landing',

  components: {
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

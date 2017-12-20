<template>
  <div class="overview">
  </div>
</template>

<script>
export default {
  name: 'overview',

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

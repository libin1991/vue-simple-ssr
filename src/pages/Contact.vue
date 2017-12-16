<template>
  <div class="contact">
    <h1>Contact is here</h1>
  </div>
</template>

<script>
export default {
  name: 'contact',

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

<template>
  <div class="info-box">
    <p>
      Viewport: ({{viewport.width}}px / {{viewport.height}}px)
      Content: ({{content.width}}px / {{content.height}}px)
      Scroll%: {{scroll.toFixed(2)}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'info-box',
  computed: {
    viewport () { return this.$store.getters['layout/viewport'] },
    content () { return this.$store.getters['layout/content'] },
    scroll () { return this.$store.getters['layout/scroll'].position }
  }
}
</script>

<style lang="stylus">
.info-box
  background white
  position fixed
  bottom 16px
  width 100%
  text-align center
  z-index 999
</style>
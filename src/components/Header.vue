<template>
  <header class="app-header">
    <nav>
      <router-link to="/" exact>Cornelius Käss</router-link>
      <router-link to="/photo">Photo</router-link>
      <router-link to="/ssr">SSR</router-link>
      <router-link to="/overview">+</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-header',

  components: {
  },

  props: {
  },

  computed: {
  },

  mounted () {
  },

  methods: {
  }
}
</script>

<style lang="stylus">
.app-header
  position fixed
  z-index 999
  height 55px
  top 0
  left 0
  right 0
  nav
    max-width 960px
    box-sizing border-box
    margin 0px auto
    padding 16px 0px
  a
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    margin-right 1em
    &:hover
      color red
    &.router-link-active
      color red
    &:nth-child(4)
      margin-right 0
@media (max-width 960px)
  .app-header nav
    padding 16px 0px
</style>

<template>
  <header class="app-header">
    <nav>
      <router-link to="'/'"><h4 class="header-home-link">Home</h4></router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-header'
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
    margin 0px auto
    padding 16px 0px
  a
    line-height 24px
    display inline-block
    vertical-align middle
    font-weight 500
    margin-right 1em
    color black
    &:last-child
      margin-right 0
@media (max-width 960px)
  .app-header nav
    padding 16px 0px
</style>

<router-link to="'/'"><h4 class="header-home-link">Home</h4></router-link>

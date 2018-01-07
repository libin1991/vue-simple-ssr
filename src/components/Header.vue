<template>
  <header class="app-header">
    <nav>
      <router-link to="/">
        <ssr-image class="header-logo"
          :src="'icons/logo.svg'"
          :placeholder="'icons/logo-48.png'"
          :alt="'Vue Simple SSR Starter'"
        />
        <h1>Vue Simple SSR</h1>      
      </router-link>
    </nav>
  </header>
</template>

<script>
import SSRImage from '../modules/ssr-progressive-img/components/SSRImage.vue'
export default {
  name: 'app-header',
  components: {
    'ssr-image': SSRImage
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
    margin 0px auto
    padding 0px 0px
  h1
    text-align center
    background rgba(255,255,255,0.5)
.header-logo
  width 80px
  display block
  margin 0px auto
  box-shadow 0 8px 6px -6px black
@media (max-width 960px)
  .app-header nav
    padding 16px 0px
</style>
<template>
  <div id="app">
    <app-header/>
    <transition appear v-bind:css="false" name="fade" mode="out-in"
      v-on:before-enter="(el) => $store.dispatch('progress/beforeRouteEnter', el)"
      v-on:enter="(el, done) => {$store.dispatch('progress/duringRouteEnter', el); done()}"
      v-on:after-enter="(el) => $store.dispatch( 'progress/afterRouteEnter', el)"
    >
      <router-view ref="content" class="content"></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',

  components: {
    'app-header': Header
  },

  data: function () {
    return {
      resizeTimeout: ''
    }
  },

  computed: {
    viewport () { return this.$store.getters['layout/viewport'] }
  },

  beforeMount () { // Initial app start, fires only once
    this.$store.dispatch('layout/setViewport',
      { width: document.children[0].clientWidth, height: document.children[0].clientHeight }
    )
  },

  mounted () {
    this.listenViewport()
    this.listenScroll()
    /*
    document.fonts.ready.then(function () {
      alert('All fonts in use by visible text have loaded.')
    })
    */
  },

  beforeDestroy () {
  },

  watch: {
    '$route' (to, from) {
    }
  },

  methods: {

    listenViewport: function () {
      window.onresize = () => {
        clearTimeout(this.resizeTimeout)
        this.resizeTimeout = setTimeout(() => {
          this.$store.dispatch('layout/setViewport',
            { width: document.children[0].clientWidth, height: document.children[0].clientHeight }
          )
        }, 500) // Throttle resize for half a second
      }
    },

    listenScroll: function () {
      window.addEventListener('scroll', (event) => {
        this.$store.dispatch('layout/setScrollPosition', window.scrollY)
      })
    }
  }
}
</script>

<style lang="stylus">
@font-face 
  font-family 'YanoneKaffeesatz'
  src url('./assets/fonts/YanoneKaffeesatz-Regular.ttf') 
  font-weight 400
  font-style normal
  font-display block
html
  height 100%
body
  font-size 16px
  font-display optional
  margin 0
  overflow-y scroll
a
  text-decoration none
h1, h4, p
  color black
  margin 0px
  font-family 'YanoneKaffeesatz'
.fade-enter-active, .fade-leave-active
  transition all .2s ease
.fade-enter, .fade-leave-active
  opacity 0
</style>
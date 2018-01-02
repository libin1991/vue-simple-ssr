<template>
  <div id="app">
    <app-header/>
    <transition appear v-bind:css="false" name="fade" mode="out-in"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
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
    },

    beforeEnter: function (el) {
      // console.log('Before enter')
      this.$bar.start()
      el.style.opacity = 0
    },
    enter: function (el, done) {
      // console.log('Enter')
      el.style.opacity = 1
      done()
      /*
      setTimeout(() => {
        console.log('Enter done')
        el.style.opacity = 1
        done()
      }, 3000);
      */
    },
    afterEnter: function (el) {
      this.$store.dispatch('layout/setContent', { width: this.$refs['content'].$el.clientWidth, height: this.$refs['content'].$el.clientHeight })
      this.$bar.finish()
    }
  }
}
</script>

<style lang="stylus">
html
  height 100%
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  margin 0
  overflow-y scroll
a
  text-decoration none
h1, h4, p
  margin 0px
.content
  max-width 960px
  margin 0 auto
  padding-top 55px
.fade-enter-active, .fade-leave-active
  transition all .2s ease
.fade-enter, .fade-leave-active
  opacity 0

.is-flexHorizontal
  display flex
  flex-direction horizontal
.flex1
  flex 1  
</style>

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
    'app-header':Header
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
      // Initial viewport assignment and then listen on resize. The params passed here are to set the grid dimensions
      this.$store.dispatch('layout/setViewport')
      window.onresize = () => {
        clearTimeout(this.resizeTimeout)
        this.resizeTimeout = setTimeout(() => {
          this.$store.dispatch('layout/setViewport')
        }, 500) // Throttle resize for half a second
      }
    },

    listenScroll: function () {
      window.addEventListener('scroll', this.scrollFunction)
    },

    scrollFunction: function (e) {
      // console.log(e)
      // console.log(`${window.scrollY} / ${this.viewport.height}`)
      // let scrollTop = this.$vuebar.getState(this.$refs[`scroll`]).dragger.offsetTop
      // scrollTop >= 50 ? this.$store.dispatch('setNavBackground', true) : this.$store.dispatch('setNavBackground', false)
    },

    beforeEnter: function (el) {
      console.log('Before enter')
      this.$bar.start()
      el.style.opacity = 0
    },
    enter: function (el, done) {
      console.log('Enter')
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
      console.log('After enter')
      console.log(this.$refs['content'].$el.clientHeight)
      this.$bar.finish()
    },
  }
}
</script>

<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  margin 0
  padding-top 55px
  overflow-y scroll
a
  text-decoration none
p
  margin 0px
.content
  max-width 720px
  margin 0 auto
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

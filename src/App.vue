<template>
  <div id="app">
    <app-header/>
    <transition appear v-bind:css="false" name="fade" mode="out-in"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"    
    >
      <router-view class="view"></router-view>
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
    beforeEnter: function (el) {
      console.log('Before enter')
      el.style.opacity = 0
    },

    // the done callback is optional when
    // used in combination with CSS
    enter: function (el, done) {
      console.log('enter here')
      el.style.opacity = 1
      /*
      setTimeout(() => { 
        console.log('Enter done')
        el.style.opacity = 1
        // done()
      }, 3000);
      */
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
.view
  max-width 720px
  margin 0 auto
.fade-enter-active, .fade-leave-active
  transition all .2s ease
.fade-enter, .fade-leave-active
  opacity 0
</style>

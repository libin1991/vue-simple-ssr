<template>
  <div class="lazy-container">
    <div class="lazy-placeholder">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'lazyContainer',

  data: function () {
    return {
      loaded: false // Unused
    }
  },  

  components: {
  },

  props: [
    'src'
  ],

  computed: {
  },

  mounted () {
    import(/* webpackChunkName: 'vue-progressive-image' */'vue-progressive-image').then(({default: module}) => {
      Vue.use(module)
      const Component = Vue.extend({template: `<progressive-img src="${this.src}" />`})
      const Instance = new Component()
      Instance.$mount(this.$el.children[0])
    });
  },

  methods: {
  }
}
</script>

<style lang="stylus">
.lazy-container
  width 100%
  height 100%
  background url('../assets/images/bg-greystripe.svg')
</style>

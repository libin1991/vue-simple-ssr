<template>
  <div class="ssr-image-container">
    <div class="lazy-placeholder">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'ssrImage',

  data: function () {
    return {
      loaded: false // Unused
    }
  },

  computed: {
    image () {
      // return require("dist/./" + this.src)
    }
  },

  components: {
  },

  props: [
    'src'
  ],

  mounted () {
    
    console.log(this.src)
    console.log(this.image)
    /*
    import("../assets/images/CatPhoto.jpg").then((x) => {
      console.log('Hi')
      console.log(x)
      const Component = Vue.extend({template: `<img src="${x}" />`})
      const Instance = new Component()
      Instance.$mount(this.$el.children[0])
    });
    */
  /*
    import('vue-progressive-image').then(({default: module}) => {
      Vue.use(module)
      const Component = Vue.extend({template: `<progressive-img src="${this.src}" />`})
      const Instance = new Component()
      Instance.$mount(this.$el.children[0])
    });
    */
  },

  methods: {
  }
}
</script>

<style lang="stylus">
.ssr-image-container
  width 100%
  height 100px
  background url('../assets/images/CatPhoto_lofi.jpg')
</style>

    <img src="../assets/images/CatPhoto.jpg"/>
<template>
  <div class="ssr-image-container">
    <div class="ssr-image-placeholder"
      :style="[
        {'background-image': 'url(dist/static/images/Lofi_'+ src + ')'},
        {'height': height + 'px'}
      ]"
    >
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'ssrImage',

  data: function () {
    return {
      loaded: false,
      height: 0
    }
  },

  /*
  computed: {
    height () {
      console.log(this.$el)
      console.log(this.$el.clientWidth)
      return 100
    }
  },
  */

  components: {
  },

  props: [
    'src', 'ratio'
  ],

  beforeMount () {
  },

  mounted () {
    this.height = this.$el.clientWidth / this.ratio
    import(`../../static/images/${this.src}`).then((x) => {
      const Component = Vue.extend({template: `<img class="ssr-image" src="${x}" />`})
      const Instance = new Component()
      Instance.$mount(this.$el)
    });
  },

  methods: {
  }
}
</script>

<style lang="stylus">
.ssr-image-container
  width 100%
  overflow hidden
.ssr-image-placeholder
  width 100%
  filter blur(10px)
  background-position center
  background-repeat no-repeat
  background-size cover
  transform scale(1.1)
  z-index 0
.ssr-image
  width 100%
</style>
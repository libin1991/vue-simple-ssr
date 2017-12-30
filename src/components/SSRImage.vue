<template>
  <div class="ssr-image-container"
    :style="[{'background': 'url(dist/static/images/Lofi_'+ src + ')'}]"
  >
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

  components: {
  },

  props: [
    'src'
  ],

  mounted () {
    import(`../../static/images/${this.src}`).then((x) => {
      const Component = Vue.extend({template: `<img src="${x}" />`})
      const Instance = new Component()
      Instance.$mount(this.$el.children[0])
    });
  },

  methods: {
  }
}
</script>

<style lang="stylus">
.ssr-image-container
  width 100%
  height 100px
</style>
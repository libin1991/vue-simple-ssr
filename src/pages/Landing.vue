<template>
  <div class="landing">
    <h1>Landing is here</h1>
    <div id="image-holder"></div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'landing',
  components: {
  },

  props: {
  },

  computed: {
  },

  beforeMount () {
    this.$bar.finish()
    import('vue-progressive-image')
    .then(({default: theDefault}) => {
      Vue.use(theDefault)
      var MyComponent = Vue.extend({
        template: '<div><p>Amcik</p><progressive-img src="https://unsplash.it/1920/1080?image=10" /></div>',
        components: {
          // 'progressive-img': theDefault
        },
      })
      const componentInstance = new MyComponent({
        propsData: {
          text: 'HI :)'
        }
      })
      componentInstance.$mount('#image-holder')
    });
  },

  beforeDestroy () {
    this.$bar.start()
  },

  watch: {
  },

  methods: {
  }
}
</script>

<style lang="stylus">
</style>
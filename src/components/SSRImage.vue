<template>
  <div class="ssr-image-container">
    <img
      :src="srcData"
      :class=" {'is-transition': !isLoaded}"
      :style="[
        {'height': height + 'px'},
        {'filter': 'blur(' + blur + 'px)'},
        {'transform': 'scale(' + scale + ')'}
      ]"
    />
  </div>
</template>

<script>
export default {
  name: 'ssrImage',

  data: function () {
    return {
      srcData: 'dist/static/images/Lofi_'+ this.src + '',
      height: 0,
      blur: 10,
      scale: 1.1
    }
  },

  computed: {
    progressedImages () { return this.$store.getters['progress/images'] },
    isLoaded () { if ( this.progressedImages.indexOf(this.src) > -1 ) {return true} else {return false} }
  },

  props: [
    'src', 'ratio'
  ],

  mounted () {
    this.height = this.$el.clientWidth / this.ratio
    if (!this.isLoaded) {
      import(`../../static/images/${this.src}`).then((x) => {
        console.log(this.src + ' is loaded HIFI')
        this.replaceHifi()
        setTimeout(() => {
          this.$store.dispatch('progress/addImageProgress', this.src)
        }, 400) // Delay needs to be slightly longer then css transition (.3s)
      });
    } else {
      this.replaceHifi()
    }
  },

  methods: {
    replaceHifi(){
      /*
      this.srcData = 'dist/static/images/'+ this.src
      this.scale = 1
      this.blur = 0
      */
    }
  }
}
</script>

<style lang="stylus">
.ssr-image-container
  position relative
  overflow hidden
.is-transition
  transition filter .3s
  transition transform .3s
</style>
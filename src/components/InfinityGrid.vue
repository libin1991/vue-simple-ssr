<template>
  <div class="infinity-grid">
    <p class="scroll">{{scroll}}</p>
    <div class="item"
      v-for="item in 50" 
      v-bind:key="item"
    >
      <ssr-image class="item"
        :src="'dist/static/images/workshop/' + item + '.jpg'"
        :placeholder="'dist/static/images/workshop/thumbnails/' + item + '.jpg'"
      />
    </div>
  </div>
</template>

<script>
import SSRImage from '../modules/ssr-progressive-img/components/SSRImage.vue'
export default {
  name: 'infinityGrid',
  components: {
    'ssr-image': SSRImage
  },

  /*
  data: function () {
    return {
    }
  },
  */

  computed: {
    viewport () { return this.$store.getters['layout/viewport'] },
    scroll () { return this.$store.getters['layout/scroll'].position }
  },

  props: [
  ],

  mounted () {
  },

  methods: {
    loadMore: function () {
    }
  }
}
</script>

<style lang="stylus">
.infinity-grid
  display grid
  grid-template-columns repeat(auto-fill, minmax(120px, 1fr))
  grid-gap 10px
  grid-auto-rows minmax(120px, auto)
  grid-auto-flow dense
  padding 10px
.item
  width 100%
.scroll
  position fixed
  bottom 0px  
</style>

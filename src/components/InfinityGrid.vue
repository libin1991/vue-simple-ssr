<template>
  <div class="infinity-grid">
    <p class="scroll">{{scroll}}</p>
    <div class="item"
      v-for="item in 50" 
      v-bind:key="item"
    >
      <ssr-background class="item"
        :src="'dist/static/images/workshop/' + item + '.jpg'"
        :placeholder="'dist/static/images/workshop/thumbnails/' + item + '.jpg'"
      />
    </div>
  </div>
</template>

<script>
import SSRBackground from '../modules/ssr-progressive-img/components/SSRBackground.vue'
export default {
  name: 'infinityGrid',
  components: {
    'ssr-background': SSRBackground
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
  display: flex;
  flex-flow: row wrap;
.item
  flex: auto;
  max-height: 320px;
  min-width: 180px;
  margin: 5px
.scroll
  position fixed
  bottom 0px
  z-index 99
  background #fff
</style>

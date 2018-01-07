<template>
  <div class="landing">
    <infinity-grid :items="gridArray" :sizes="sizeArrays"/>
    <info-box/>
  </div>
</template>

<script>

const InfinityGrid = () => import(/* webpackChunkName: 'components-infinity-grid' */ '../components/InfinityGrid.vue')
const InfoBox = () => import(/* webpackChunkName: 'components-info-box' */ '../components/InfoBox.vue')

const range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start)

export default {
  name: 'landing',
  components: {
    InfinityGrid,
    InfoBox
  },
  data: function () {
    return {
      gridArray: range(0, 20),
      sizeArrays: {
        big: [5, 8, 40, 80],
        bigger: [80, 60],
        biggest: [2, 100]
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
.landing
  padding 16px
</style>
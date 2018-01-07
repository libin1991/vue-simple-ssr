<template>
  <div class="infinity-grid">
    <div class="item"
      v-for="item in items" 
      v-bind:key="item"
      :class="[
        {'big':sizes.big.indexOf(item) > -1},
        {'bigger':sizes.bigger.indexOf(item) > -1},
        {'biggest':sizes.biggest.indexOf(item) > -1}
      ]"
    >
      <ssr-background
        :src="'https://picsum.photos/1920/1080?image=' + item"
        :placeholder="'https://picsum.photos/192/108?image=' + item"
        no-ratio
      />
      <p>{{item}}</p>
    </div>
  </div>
</template>

<script>

const SSRBackground = () => import(/* webpackChunkName: 'modules-ssr-progressive-background' */ '../modules/ssr-progressive-img/components/SSRBackground.vue')

export default {
  name: 'infinityGrid',
  components: {
    'ssr-background': SSRBackground
  },

  computed: {
    viewport () { return this.$store.getters['layout/viewport'] },
    scroll () { return this.$store.getters['layout/scroll'].position }
  },

  props: [
    'items', 'sizes'
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
  width 100%
  margin auto
  display grid
  grid-template-columns repeat(6, 1fr)
  grid-gap 8px
.item
  box-sizing border-box
  width 100%
  min-height 12.5vw
  overflow hidden
  height 100%
  p
    position relative
    top -50px
    display inline
    background white
    z-index 99

random(min,max)
  return floor(math(0, 'random')*(max - min + 1) + min)

bigger($c, $r)
  grid-column-end span $c
  grid-row-end span $r

for $i in (1)..(20)
  $red = random(0,255)
  $green = random(0,255)
  $blue = random(0,255)
  .item:nth-child({$i})
    background: rgb($red, $green, $blue)

.big
  bigger(2, 2)
.bigger
  bigger(3, 3)
.biggest
  bigger(4, 4)
  font-size: 2em
</style>
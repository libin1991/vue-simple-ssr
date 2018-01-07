<template>
  <div class="infinity-grid">
    <div class="item"
      v-for="item in 400" 
      v-bind:key="item"
    >
      <p>{{item}}</p>
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

  computed: {
    viewport () { return this.$store.getters['layout/viewport'] },
    scroll () { return this.$store.getters['layout/scroll'].position }
  },

  props: [
    'count', 'sizes'
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
  grid-template-columns repeat(8, 1fr)
  grid-gap 1px
.item
  box-sizing border-box
  width 100%
  min-height 12.5vw

random(min,max)
  return floor(math(0, 'random')*(max - min + 1) + min)

bigger($c, $r)
  grid-column-end span $c
  grid-row-end span $r

for $i in (1)..(400)
  $red = random(0,255)
  $green = random(0,255)
  $blue = random(0,255)
  .item:nth-child({$i})
    background: rgb($red, $green, $blue)

.big
  bigger(2, 2)
.extrabig
  bigger(3, 3)
.superbig
  bigger(4, 4)
  font-size: 2em
</style>
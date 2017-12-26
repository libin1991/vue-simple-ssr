<template>
  <div class="infinity-grid">
    <div class="item"
      v-for="item in gridItems" 
      v-bind:key="item"
    >
      <p>{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infinityGrid',

  data: function () {
    return {
      gridItems: [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
    }
  },  

  components: {
  },

  props: [
  ],

  computed: {
  },

  mounted () {
  },

  methods: {
  }
}
</script>

<style lang="stylus">
.infinity-grid
  display grid
  grid-gap 1px
  grid-template-columns repeat(auto-fill, minmax(240px,1fr))
.item
  width 100%
  height 100px
  background blue
</style>

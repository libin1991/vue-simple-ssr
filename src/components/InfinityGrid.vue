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
      gridItems: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
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
    loadMore: function() {
      // this.busy = true;

      setTimeout(() => {
        for (var i = 50, j = 60; i < j; i++) {
          this.gridItems.push({ name: 'abbas' });
        }
        // this.busy = false;
      }, 1000);
    }
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

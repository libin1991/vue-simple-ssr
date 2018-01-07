<template>
  <div class="landing">
    <infinity-grid/>
    <info-box/>
  </div>
</template>

<script>
import InfinityGrid from '../components/InfinityGrid.vue'
import InfoBox from '../components/InfoBox.vue'
export default {
  name: 'landing',
  components: {
    InfinityGrid, InfoBox
  }
}
</script>

<style lang="stylus">
</style>
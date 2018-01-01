<template>
  <div class="ssr">
    <ssr-image :src="'CatPhoto.jpg'" :ratio="8/10"/>
    <ssr-image :src="'PixelPhoto.jpg'" :ratio="3/4"/>
    <h1>Sevgiyle calisiyoruz</h1>
  </div>
</template>

<script>
import SSRImage from '../components/SSRImage.vue'
export default {
  name: 'ssr',
  components: {
    'ssr-image': SSRImage
  }
}
</script>

<style lang="stylus">
</style>

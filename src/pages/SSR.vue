<template>
  <div class="ssr">
    <div class="is-flexHorizontal">
      <ssr-image class="flex1" :src="'CatPhoto.jpg'" :ratio="8/10"/>
      <ssr-image class="flex1" :src="'PixelPhoto.jpg'" :ratio="3/4"/>
    </div>
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
.is-flexHorizontal
  display flex
  flex-direction horizontal
.flex1
  flex 1
</style>

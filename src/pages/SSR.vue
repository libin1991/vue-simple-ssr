<template>
  <div class="ssr">
    <div class="is-flexHorizontal">
      <ssr-image class="flex1"
        src="dist/static/images/CatPhoto.jpg"
        placeholder="dist/static/images/Lofi_CatPhoto.jpg"
        :aspect-ratio="1"
      />
      <ssr-image class="flex1"
        src="dist/static/images/PixelPhoto.jpg"
        placeholder="dist/static/images/Lofi_PixelPhoto.jpg"
        :aspect-ratio="1"
      />
    </div>
    <h1>Sevgiyle calisiyoruz</h1>
  </div>
</template>

<script>
import SSRImage from '../modules/ssr-progressive-img/components/SSRImage.vue'
export default {
  name: 'ssr',
  components: {
    'ssr-image': SSRImage
  }
}
</script>

<style lang="stylus">
</style>

<template>
  <div class="ssr">
    <ssr-image
      :src="'dist/static/images/workshop/' + 1 + '.jpg'"
      :placeholder="'dist/static/images/workshop/thumbnails/' + 1 + '.jpg'"
    />    
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

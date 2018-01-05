<template>
  <div class="ssr">
    <ssr-image
      :src="'images/workshop/' + 1 + '.jpg'"
      :placeholder="'images/workshop/thumbnails/' + 1 + '.jpg'"
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

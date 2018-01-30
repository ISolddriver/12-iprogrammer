<template>
  <swiper class="banner index-banner" :options="swiperOption">
    <swiper-slide v-for="item of sliders" :key="item.id">
      <img class="banner-img" :src="'../../static/img/' + item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'messSwiper',
    props: {
      sliders: Array
    },
    data () {
      return {
        swiperOption: {
          autoplay: 2000,
          pagination: '.swiper-pagination',
          speed: 500,
          loop: true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/style/common/varibles.styl'
  .swiper-pagination >>> span
    background: #000
  .swiper-pagination >>> .swiper-pagination-bullet-active
    background: #fff
  .banner
    overflow: hidden
    width: 100%
    height: 0
    margin-top: .2rem
    padding-bottom: 42.5%
    .banner-img
      width: 100%
</style>
<style lang="stylus">
  .index-banner
    .swiper-pagination
      margin-bottom: -0.14rem
</style>
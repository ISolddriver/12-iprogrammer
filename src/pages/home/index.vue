<template>
  <div class="main">
    <home-mask class="mask"></home-mask>
    <home-header @currentTab="handlePage"></home-header>
    <home-search></home-search>
    <prince :is="currentTab" class="scroller" keep-alive></prince>
    <footer-con></footer-con>
  </div>
</template>

<script>
  import homeHeader from './homeHeader'
  import homeSearch from './homeSearch'
  import homeAttention from './homeAttention'
  import homeClassify from './homeClassify'
  import homeRec from './homeRec'
  import footerCon from '../../components/footer/footer'
  import homeMask from './mask'
  export default {
    name: 'Home',
    data () {
      return {
        currentTab: 'homeAttention'
      }
    },
    components: {
      homeHeader,
      homeSearch,
      homeAttention,
      homeClassify,
      homeRec,
      footerCon,
      homeMask
    },
    methods: {
      handlePage (page) {
        this.currentTab = page
      }
    }
  }
</script>

<style scoped lang="stylus">
  .main
    display: flex
    flex-direction: column
    position: absolute
    overflow: hidden
    top: 0
    right: 0
    bottom: 0
    left: 0
    .mask
      position: absolute
      z-index: 5
      width: 100%
      height: 100%
      text-align: center
      background: #fff
    .scroller
      flex: 1
      overflow: hidden
</style>
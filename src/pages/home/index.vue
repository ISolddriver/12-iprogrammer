<template>
  <div class="main">
    <home-header></home-header>
    <home-search></home-search>
    <home-attention class="scroller"></home-attention>
    <footer-con></footer-con>
  </div>
</template>

<script>
  import homeHeader from './homeHeader'
  import homeSearch from './homeSearch'
  import homeAttention from './homeAttention'
  import footerCon from '../../components/footer/footer'
  export default {
    name: 'Home',
    components: {
      homeHeader,
      homeSearch,
      homeAttention,
      footerCon
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
    .scroller
      flex: 1
      overflow: hidden
</style>
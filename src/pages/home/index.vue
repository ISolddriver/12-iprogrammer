<template>
  <div class="main">
    <home-header></home-header>
    <home-search></home-search>
    <home-nav></home-nav>
    <home-con></home-con>
    <footer-con></footer-con>
  </div>
</template>

<script>
  import homeHeader from './homeHeader'
  import homeSearch from './homeSearch'
  import homeCon from './homeCon'
  import homeNav from './homeNav'
  import footerCon from './footer'
  export default {
    name: 'Home',
    components: {
      homeHeader,
      homeSearch,
      homeNav,
      homeCon,
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
</style>
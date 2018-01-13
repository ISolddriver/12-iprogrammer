<template>
  <div class="main">
    <mess-header></mess-header>
    <mess-con class="scroller"></mess-con>
    <footer-con></footer-con>
  </div>
</template>

<script>
  import footerCon from '../../components/footer/footer'
  import messCon from './messCon'
  import messHeader from './messHeader'
  export default {
    name: 'exchange',
    components: {
      footerCon,
      messCon,
      messHeader
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

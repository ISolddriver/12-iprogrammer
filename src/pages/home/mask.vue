<template>
  <div ref="mask">
    <img class="mask-logo" src="/static/img/mask.png" alt="">
    <div class="mask-text">一个程序员交流的平台</div>
  </div>
</template>

<script>
  export default {
    name: 'homeMask',
    mounted () {
      setTimeout(() => {
        this.$refs.mask.style = 'display: none'
      }, 5000)
    }
  }
</script>

<style lang="stylus" scoped>
  .mask-logo
    margin:3rem auto
    width: 4.8rem
    height: 3.5rem
  .mask-text
    position: absolute
    bottom: 30%
    width: 100%
    height: 1rem
    font-size: .4rem
    text-align: center
    line-height: 1rem
</style>
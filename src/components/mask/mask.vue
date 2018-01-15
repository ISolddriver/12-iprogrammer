<template>
  <div ref="mask" class="mask">
    <img class="mask-logo" src="/static/img/mask.png" alt="启动页">
    <div class="mask-text">一个程序员交流的平台</div>
  </div>
</template>

<script>
  export default {
    name: 'homeMask',
    mounted () {
      setTimeout(() => {
        this.$refs.mask.style = 'display: none'
        this.$router.push('/index')
      }, 5000)
    }
  }
</script>

<style lang="stylus" scoped>
  .mask
    text-align: center
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
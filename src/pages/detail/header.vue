<template>
  <div class="header" ref="header">
    <i class="iconfont back" @click="handleBackClick">&#xe63f;</i>
    <i>分享详情</i>
  </div>
</template>

<script>
  export default {
    name: 'att-header',
    props: {
      attUserName: String
    },
    mounted () {
      this.bindScroll()
    },
    destroyed () {
      this.unbindScroll()
    },
    methods: {
      handleBackClick () {
        this.$router.go(-1)
      },
      bindScroll () {
        this.proxyFn = this.handleScroll.bind(this)
        window.addEventListener('scroll', this.proxyFn)
      },
      unbindScroll () {
        window.removeEventListener('scroll', this.proxyFn)
      },
      handleScroll (e) {
        let opacity = document.documentElement.scrollTop / 220
        opacity = opacity > 1 ? 1 : opacity
        this.$refs.header.style.opacity = opacity
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/style/common/varibles.styl'
  .header
    z-index: 1
    position: fixed
    top: 0
    width: 100%
    height: .8rem
    text-align: center
    line-height: .8rem
    background: #00bcd4
    color: #fff
    opacity: 0
    .back
      position: absolute
      left: .2rem
      width: .5rem
      line-height: .8rem
      font-size: .40rem      
</style>
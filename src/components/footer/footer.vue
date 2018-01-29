<template>
  <div class="footer border-top">
    <router-link tag="div" to="/index" class="subfield">
      <p class="iconfont sub-icon">&#xe65d;</p><p class="sub-text" @click="handleClick">首页</p>
    </router-link>
    <router-link tag="div" to="/discovery" class="subfield">
      <p class="iconfont sub-icon">&#xe65a;</p><p class="sub-text">发现</p>
    </router-link>
    <router-link tag="div" to="/exchange" class="subfield">
      <p class="iconfont sub-icon">&#xe6e7;</p><p class="sub-text">消息</p>
    </router-link>
    <router-link tag="div" to="/mine" class="subfield">
      <p class="iconfont sub-icon">&#xe62f;</p><p class="sub-text">我</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'foot-con',
    methods: {
      handleClick () {
        console.log(111)
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/style/common/varibles.styl'
  .footer
    display: flex
    position: absolute
    z-index: 20
    bottom: 0
    left: 0
    right: 0
    height: 1rem
    background: $bgColor
    &::before
      border-color: $borderColor
    .subfield
      width: 25%
      padding-top: .1rem
      text-align: center
      .sub-icon
        font-size: .45rem!important
        color: #5f616e
      .sub-text
        padding-top: .14rem
        font-size: .2rem
        color: #a5a5a5
  .router-link-exact-active .iconfont, .router-link-exact-active .sub-text
    color: #fd5151 !important
</style>
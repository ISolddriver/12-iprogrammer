<template>
  <div class="header border-bottom">消息<i class="iconfont mess-icon">&#xe62c;</i></div>
</template>

<script>
  export default {
    name: 'messHeader'
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/style/common/varibles.styl'
  .header
      position: relative
      width: 100%
      height: 1rem
      text-align: center
      line-height: 1rem
      font-size: .36rem
      color: $fontColor
      background: $bgColor
      &::before
        border-color: $borderColor
      .mess-icon
        position: absolute
        right: .25rem
        font-size: .5rem!important
</style>
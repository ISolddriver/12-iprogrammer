<template>
  <div class="search border-bottom">
    <input class="search-input" type="text" placeholder="iProgrammer新时代"
      ref="search"
      @focus="searchInputFocus"
      @blur="searchInputBlur">
    <div class="search-btn">搜索</div>
  </div>
</template>

<script>
  export default {
    name: 'homeSearch',
    methods: {
      searchInputFocus () {
        this.$refs.search.style.border = '1px solid #0aa8f1'
      },
      searchInputBlur () {
        this.$refs.search.style.border = '1px solid #fff'
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/style/common/varibles.styl'
  .search
    display: flex
    justify-content: center
    padding-top: .24rem
    width: 100%
    height: .44rem
    background: $bgColor
    &::before
      border-color: $borderColor
    .search-input
      width: 61%
      padding-left: .3rem
      border: 1px solid #fff
      background: #ddd
    .search-btn
      padding: 0 .14rem
      line-height: .44rem
      color: #acacac
</style>
<template>
  <div class="search border-bottom">
    <div id="search-input" class="search-input"
           type="text" placeholder=""
           ref="search"
           @focus="searchInputFocus"
           @blur="searchInputBlur"
           style="line-height: .48rem">
           iProgrammer新时代
    </div>
    <div class="search-btn"></div>
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
    position: relative
    z-index: 20
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
<template>
  <div class="header">
    <div class="head-con focus"
         @click="handleNavClick('homeAttention')"
         :class="[cssAttention ? 'active' : '']" 
         >关注
    </div>
    <div class="head-con classify"
         @click="handleNavClick('homeClassify')"
         :class="[cssClassify ? 'active' : '']" 
         >分类
    </div>
    <div class="head-con recommand" 
         @click="handleNavClick('homeRec')"
         :class="[cssRec ? 'active' : '']" 
         >推荐
    </div>

  </div>
</template>

<script>
  import homeAttention from './homeAttention'
  import homeClassify from './homeClassify'
  import homeRec from './homeRec'

  export default {
    name: 'homeHeader',
    data () {
      return {
        currentTab: 'homeAttention',
        cssAttention: true,
        cssClassify: false,
        cssRec: false
      }
    },

    components: {
      homeAttention,
      homeClassify,
      homeRec
    },

    methods: {
      handleNavClick (tab) {
        this.currentTab = tab
        this.$emit('currentTab', this.currentTab)
        if (this.currentTab === 'homeAttention') {
          this.cssAttention = true
          this.cssClassify = false
          this.cssRec = false
        } else if (this.currentTab === 'homeClassify') {
          this.cssAttention = false
          this.cssClassify = true
          this.cssRec = false
        } else if (this.currentTab === 'homeRec') {
          this.cssAttention = false
          this.cssClassify = false
          this.cssRec = true
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/style/common/varibles.styl'
  .header
    position: relative
    z-index: 20
    display: flex
    justify-content: space-between
    height: .9rem
    padding: 0 1.06rem
    background: $bgColor
    .head-con
      padding: 0 .25rem
      text-align: center
      line-height: .9rem
      color: #333
    .active
      color: #fb5151
      border-bottom: .05rem solid #fb5151
</style>
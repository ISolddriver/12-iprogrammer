<template>
  <div class="header" @click="handleNavClick($event)">
    <div class="head-con focus"
         v-bind:class="[focusActive ? 'active' : '']"
         data-id="focus">关注</div>
    <div class="head-con classify"
         v-bind:class="[classifyActive ? 'active' : '']"
         data-id="classify">分类</div>
    <router-link to="/recommend" tap="div">
      <div class="head-con recommand"
         v-bind:class="[recommandActive ? 'active' : '']"
         data-id="recommand">推荐</div>
    </router-link> 
    
  </div>
</template>

<script>
  export default {
    name: 'homeHeader',
    data () {
      return {
        focusActive: true,
        classifyActive: false,
        recommandActive: false
      }
    },
    methods: {
      handleNavClick (e) {
        const tar = e.target
        if (tar.getAttribute('data-id') === 'focus') {
          this.focusActive = true
          this.classifyActive = false
          this.recommandActive = false
        } else if (tar.getAttribute('data-id') === 'classify') {
          this.focusActive = false
          this.classifyActive = true
          this.recommandActive = false
        } else {
          this.focusActive = false
          this.classifyActive = false
          this.recommandActive = true
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/style/common/varibles.styl'
  .header
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
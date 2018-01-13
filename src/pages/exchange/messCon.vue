<template>
  <div class="mess">
    <div class="mess-nav border-bottom">
      <div>
        <div class="nav-box" style="background: #098deb">
          <i class="iconfont nav-icon">&#xe676;</i>
        </div>
        <p class="nav-txt">粉丝</p>
      </div>
      <div>
        <div class="nav-box" style="background: #f1097c">
          <i class="iconfont nav-icon">&#xe629;</i>
        </div>
        <p class="nav-txt">赞</p>
      </div>
      <div>
        <div class="nav-box" style="background: #09f16c">
          <i class="iconfont nav-icon">&#xe622;</i>
        </div>
        <p class="nav-txt">@我的</p>
      </div>
      <div>
        <div class="nav-box" style="background: #e420f6">
          <i class="iconfont nav-icon">&#xe621;</i>
        </div>
        <p class="nav-txt">评论</p>
      </div>
    </div>
    <mess-swiper :sliders="sliders"></mess-swiper>
  </div>
</template>

<script>
  import axios from 'axios'
  import messSwiper from './messSwiper'
  export default {
    name: 'messCon',
    data () {
      return {
        sliders: []
      }
    },
    components: {
      messSwiper
    },
    methods: {
      getIndexData () {
        axios.get('/static/messCon.json')
          .then(this.handleDataSucc.bind(this))
          .catch(this.handleDataError.bind(this))
      },
      handleDataSucc (res) {
        res = res ? res.data : null
        if (res && res.ret && res.data) {
          res.data.slider && (this.sliders = res.data.slider)
        } else {
          this.handleDataError()
        }
      },
      handleDataError () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/style/common/varibles.styl'
  .mess
    background: #f1f1f1
    .mess-nav
      display: flex
      justify-content: space-around
      margin-top: .15rem
      height: 2rem
      background: $bgColor
      &::before
        border-color: $borderColor
      .nav-box
        margin-top: .3rem
        width: 1rem
        height: 1rem
        text-align: center
        line-height: 1rem
        border-radius: .1rem
        .nav-icon
          color: #fff
          font-size: .5rem!important
      .nav-txt
        margin-top: .1rem
        text-align: center
        color: $fontColor
</style>
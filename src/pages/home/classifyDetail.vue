<template>
  <transition name="move">
    <div class="classify-detail">
      <div class="header border-bottom">
        <i class="iconfont back" @click="handleBackClick">&#xe63f;</i>
        <i>{{cInfo.title}}</i>
      </div>
      <div class="con" ref="scroller">
        <div>
          <div class="con-title">{{cInfo.title}}</div>
          <div class="con-text">{{cInfo.content}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'classify-detail',
    data () {
      return {
        cInfo: ''
      }
    },
    watch: {
      cInfo () {
        this.$nextTick(() => {
          this.scroller.refresh()
        })
      }
    },
    methods: {
      getIndexData () {
        axios.get('/static/classifyCon.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleDataError.bind(this))
      },

      handleGetDataSucc (res) {
        res = res ? res.data : null
        if (res && res.data) {
          this.cInfo = res.data.class[Number(this.$route.params.id) - 1]
        } else {
          this.handleDataError()
        }
      },
      handleDataError () {
        console.log('error')
      },

      handleBackClick () {
        this.$router.push('/index')
      },

      createScroller () {
        this.scroller = new BScroll(this.$refs.scroller, {
          probeType: 2
        })
      },
      bindEvents () {
        this.scroller.on('scroll', this.handleScroll.bind(this))
      },
      handleScroll (e) {
        // console.log(e)
      }
    },
    created () {
      // console.log(this.$route.params.id)
      this.getIndexData()
    },
    mounted () {
      this.createScroller()
      this.bindEvents()
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/style/common/varibles.styl'
  .move-enter-active, .move-leave-active
    transition: all .5s
  .move-enter, .move-leave-to
    transform: translate3d(100%, 0,0)
  .classify-detail
    position: fixed
    width: 100%
    height: 100%
    background: #eee
    margin-top: -0.4rem
    padding-bottom: 1rem
    .header
      position: relative
      z-index:2
      height: .5rem
      line-height: .5rem
      background: #ccc
      background: linear-gradient(to bottom, #f7f7f7, #ddd, #f1f1f1)
      &::before
        border-color: #333
    .con
      height: 76%
      width: 100%
      .con-title
        text-align: center
        line-height: 1.4rem
        font-size: .5rem
        letter-spacing: .1rem
        font-weight: 900
        color:#0DCFDF;
        text-shadow: 0 0 2px #686868,0 1px 1px #ddd, 0 2px 1px #d5d5d5, 0 3px 1px #ccc, 0 4px 1px #c5c5c5, 0 5px 1px #c1c1c1, 0 6px 1px #bbb, 0 7px 1px #777,0 8px 3px rgba(100,100,100,0.4),0 9px 5px rgba(100,100,100,0.09),0 10px 7px rgba(100,100,100,0.14),0 11px 9px rgba(100,100,100,0.2),0 12px 11px rgba(100,100,100,0.24),0 13px 15px rgba(100,100,100,0.29)
      .con-text
        padding: 0 .3rem
        word-break: break-all
        line-height: .4rem
        font-size: .3rem
        text-indent: .6rem
        text-shadow: 0 .06rem #eee;
        color: #333;
</style>
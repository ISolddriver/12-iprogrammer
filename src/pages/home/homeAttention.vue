<template>
  <div ref="scroller">
    <div class="content">
      <transition name="loading">
        <div v-show="isLoading" class="loading">正在加载...</div>
      </transition>
       <router-view/>
      <div class="con border-topbottom"
           v-for="(item, index) in conInfo"
           >
        <div class="con-top border-bottom">
          <div class="imgBox">
            <img class="conImg" :src="'../../static/img/' + item.headImg" alt="">
          </div>
          <div class="author">{{item.nickname}}<i class="shareText">的分享</i></div>
          <div class="more"><i class="iconfont more-icon">&#xe63d;</i></div>
        </div>
        <div class="con-bottom">
          <div class="con-bottom-img">
            <img class="con-img" :src="'../../static/img/' + item.cover" alt="">
          </div>
          <div class="con-bottom-word" 
               @click="handleArticleClick"
               :data-index="index">
            <div class="con-title">{{item.title}}</div>
            <div class="con-text">{{item.content}}</div>
          </div>
          <div class="con-bottom-comment">
            <i class="iconfont comment-icon like" 
               @click="handleLikeClick"
               >&#xe64c;</i>
            <i class="iconfont comment-icon comment">&#xe648;</i>
            <i class="iconfont comment-icon collect"
               @click="handleCollectClick"
               >&#xe64d;</i>
            <i class="statis">评论(<p class="number">{{item.viewCount}}</p>)</i>
          </div>
        </div>
      </div>
      <div class="footer-con">没有更多内容</div>     
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  export default {
    name: 'homeAttention',
    data () {
      return {
        conInfo: [],
        isLoading: false,
        isFetching: false,
        activeLike: false,
        activeCollect: false,
        pageNum: 1
      }
    },
    watch: {
      list () {
        this.$nextTick(() => {
          this.scroller.refresh()
        })
      }
    },
    methods: {
      createScroller () {
        this.scroller = new BScroll(this.$refs.scroller, {
          probeType: 2
        })
      },
      bindEvents () {
        this.scroller.on('scroll', this.handleScroll.bind(this))
        this.scroller.on('scrollEnd', this.handleScrollEnd.bind(this))
      },
      handleScroll (e) {
        if (e.y > 60 && !this.isLoading) {
          this.getIndexData()
          this.isLoading = true
        }
      },
      handleScrollEnd () {
        this.isLoading = false
      },

      getIndexData () {
        if (!this.isFetching) {
          this.isFetching = true
          axios.get('/static/homecon.json?pageNum=' + this.pageNum)
            .then(this.handleGetDataSucc.bind(this))
            .catch(this.handleDataError.bind(this))
        }
      },

      handleGetDataSucc (res) {
        res = res ? res.data : null
        if (res && res.data) {
          if (res.data.blogs) {
            this.conInfo = this.conInfo.concat(res.data.blogs)
            this.pageNum += 1
          }
          this.isFetching = false
        } else {
          this.handleDataError()
        }
      },
      handleDataError () {
        console.log('error')
      },
      handleLikeClick (e) {
        if (this.activeLike === false) {
          e.target.className = 'iconfont comment-icon like addLike'
          this.activeLike = true
        } else {
          e.target.className = 'iconfont comment-icon like'
          this.activeLike = false
        }
        axios.get('/api/homecon.json?' + this.activeLike)
         .then(this.handleLikeSucc.bind(this))
      },
      handleLikeSucc (res) {
        console.log(res)
      },
      handleCollectClick (e) {
        if (this.activeCollect === false) {
          e.target.className = 'iconfont comment-icon collect addCollect'
          this.activeCollect = true
        } else {
          e.target.className = 'iconfont comment-icon collect'
          this.activeCollect = false
        }
        axios.get('/api/homecon.json?' + this.activeCollect)
         .then(this.handleCollectSucc.bind(this))
      },
      handleCollectSucc (res) {
        console.log(res)
      },

      handleArticleClick (e) {
        const target = e.currentTarget
        const index = parseInt(target.getAttribute('data-index'), 10)
        this.$router.push({
          name: 'att-detail',
          params: { id: index }
        })
      }

    },
    created () {
      this.getIndexData()
    },
    mounted () {
      this.createScroller()
      this.bindEvents()
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/style/common/varibles.styl'
  .loading
    line-height: .8rem
    text-align: center
    color: $lightFontColor
  .loading-enter-active, .loading-leave-active
    transition: opacity .5s
  .loading-enter, .loading-leave-to
      opacity: 0
  .con
    width: 100%
    height: 7.15rem
    &::after,::before
      border-color: $borderColor
    .con-top
      display: flex
      position: relative
      height: 1.15rem
      .imgBox
        margin: .1rem .3rem 0 .2rem
        width: .86rem
        height: .86rem
        border-radius: .44rem
        overflow: hidden
        background: url(../load-logo.gif) center center
        .conImg
          width: 100%
          height: 100%
      .author
        line-height: 1.15rem
        font-size: .26rem
        color: $fontColor
        .shareText
          margin-left: .1rem
          color: #333
      .more
        position: absolute
        right: .3rem
        top: .35rem
        .more-icon
          color: $fontColor
          font-size: .5rem!important
    .con-bottom
      .con-bottom-img
        width: 100%
        height: 3.1rem
        .con-img
          width: 100%
          height: 100%
      .con-bottom-word
        padding: 0.3rem .2rem .2rem .2rem
        .con-title
          font-size: .28rem
          color: #000
        .con-text
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
          text-indent: .52rem
          line-height: .34rem
          margin-top: .2rem
          font-size: .26rem
          color: $fontColor
      .con-bottom-comment
        position: relative  
        padding-top: .04rem
        width: 100%
        .comment-icon
          position: absolute
          color: #8f9299
          font-size: .3rem!important
        .like
          top: 0
          left: 50%
          font-size: .4rem!important
        .addLike
          color: #ff5050
        .comment
          left: 60%
        .collect
          left: 70%
        .addCollect
          color: #f2af05
        .statis
          display: flex
          position: absolute
          left: 77%
          font-size: .28rem
          .number
            line-height: .34rem
            max-width: .9rem
            overflow: hidden
            white-splce: nowrap
            text-overflow: ellipsis
            color: $fontColor
            font-size: .2rem
  .footer-con
    line-height: 1rem
    text-align: center
    width: 100%
    height: 1rem
    color: $fontColor
</style>
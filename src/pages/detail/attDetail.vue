<template>
  <div class="att-detail">
    <i class="iconfont backT">&#xe63f;</i>
    <att-header :attUserName="attUserName"></att-header>
    <div class="con">
      <div class="con-img">
        <img :src="mutations.imgUrls" alt="" class="img" />
      </div>  
      <div class="box1">
        <div class="title">{{mutations.titles}}</div>
        <div class="content">{{mutations.contents}}</div>
      </div>
      <div class="comment">
        <div class="comment-title">评论</div>
        <div class="comment-con">暂无新评论(0)</div>
      </div>
    </div>
  </div>
</template>

<script>
  import AttHeader from './header'
  import { mapState } from 'vuex'
  export default {
    name: 'att-detail',
    props: {
      attId: [Number, String]
    },
    data () {
      return {
        attUserName: ''
      }
    },
    components: {
      AttHeader
    },
    computed: {
      ...mapState(['mutations'])
    },
    created () {
      console.log(this.mutations.imgUrls)
    }
  }
</script>

<style lang="stylus" scoped>
  .backT
    position: fixed
    left: .2rem
    width: .5rem
    line-height: .8rem
    font-size: .40rem   
    color: #fff
  .att-detail
    width: 100%
    .con-img
      height: 0
      overflow: hidden
      padding-bottom: 5rem
      .img
        width: 100%
        height: 5rem
    .box1
      width: 90%
      margin: .2rem
      padding: .1rem
      min-height: 5rem
      position:relative
      display: inline-block
      background: -webkit-gradient(linear, 0% 20%, 0% 1000%, from(#fff), to(#fff), color-stop(.1,#f3f3f3))
      border: 1px solid #ccc
      -webkit-box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1) inset
      -webkit-border-bottom-right-radius: 6px 50px
      &::before
        content: ''
        width: 50px
        height: 100px
        position: absolute
        bottom: 0
        right: 0
        -webkit-box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.1)
        z-index: -1
        -webkit-transform: translate(-35px,-40px) skew(0deg,30deg) rotate(-25deg)
      &::after
        content: ''
        width: 100px
        height: 100px
        top: 0
        left: 0
        position: absolute
        display: inline-block
        z-index: -1
        -webkit-box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.2)
        -webkit-transform: rotate(2deg) translate(20px,25px) skew(20deg)
      .title
        padding: 0 .3rem
        text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
        font-size: .35rem
        min-height: 1rem
        text-align: center
        line-height: 1rem
      .content
        word-break:break-all
        color: #666
        padding: 0 .3rem
        line-height: .4rem
        text-align: justify
  .comment
    width: 100%
    height: 3rem
    .comment-title
      height: 1rem
      line-height: 1.2rem
      font-size: .44rem
      text-align: left
      padding-left: .3rem
      border-bottom: 1px dashed #ccc
    .comment-con
      line-height: 1rem
      text-align: center
</style>
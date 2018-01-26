<template>
	<div class="publish-container">
		<div class="head">
			<i class="iconfont back" @click="handleBack">&#xe63f;</i>
			我的发布
		</div>
		<div class="content" ref="wrapper">
			<div>
				<div class="publish-item" v-for="item of publish">
					<span class="title">{{item.title}}</span>
					<p class="des">{{item.des}}</p>
					<span class="time">发布于--{{item.time}}</span><br>
					<span class="iconfont like">&#xe64c; {{item.like}} |</span>
					<span class="iconfont collect">&#xe64d; 收藏 {{item.collect}} |</span>
					<span class="iconfont share">&#xe646; 分享 {{item.share}}</span>
				</div>
			  <span class="bottom">没有更多数据了</span>
			</div>
		</div>
	</div>
</template>
<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'mypublish',
    data () {
      return {
        publish: []
      }
    },
    methods: {
      handleBack () {
        this.$router.go(-1)
      },
      getData () {
        axios.get('/api/publish.json')
         .then(this.handleSucc.bind(this))
         .catch(this.handleErr.bind(this))
      },
      handleSucc (res) {
        this.publish = res.data.data
      },
      handleErr () {
        console.log('err get publishData')
      },
      createScroller () {
        this.scroller = new BScroll(this.$refs.wrapper, {
          probeType: 2
        })
      }
    },
    created () {
      this.getData()
    },
    mounted () {
      this.createScroller()
    },
    watch: {
      publish () {
        this.scroller.refresh()
      }
    }
  }
</script>
<style lang='stylus' scoped>
	.publish-container
		position: absolute
		display: flex
		flex-direction: column 
		top: 0
		right: 0
		bottom: 0
		left: 0
		.head
			height: .88rem
			text-align: center
			line-height: .88rem
			color: #fff
			font-size: .32rem
			background: #ccc
		.back
			position: absolute
			left: .15rem	
		.content 
			flex: 1
			overflow: hidden
			padding: .2rem .2rem 0 .2rem
			.publish-item
				margin-bottom: .2rem
				border-bottom: 1px solid #eee
				.title 
					display: inline-block
					width: 100%
					line-height: .6rem
					font-size: .34rem
					color: #408ffe
					overflow: hidden
					text-overflow:ellipsis
					white-space: nowrap
				.des
					line-height: .32rem
					color: #666
				.time
					line-height: .5rem
					color: orange
				.like, .collect, .share
					line-height: .6rem
					margin-right: .2rem
					color: #408ffe
			.bottom
				display: inline-block
				width: 100%
				line-height: .6rem
				text-align: center
</style>
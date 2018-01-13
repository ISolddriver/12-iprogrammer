<template>
	<div class="main" ref="wrapper">
		<div>
			<div v-for="item in list" class="content">
				<h2>{{item.contitle}}</h2>
				<div class="container">
					<img :src="'../../static/img/' + item.headImg" class="photo">
					<div class="info">
						<span class="name">{{item.author}}</span>
						<span class="time">{{item.time}}</span>
						<p class="txtCon">{{item.conText}}</p>
						<div class="picCon">
							<img :src="'../../static/img/' + item.conImg" class="pic">
						</div>
						<div class="footer">
							<div class="forward"><i class="iconfont">&#xe646;</i>转发 {{item.forward}}</div>
							<div class="fabulous"><i class="iconfont">&#xe64c;</i>点赞 {{item.like}}</div>
							<div class="comment"><i class="iconfont">&#xe648;</i>评论 {{item.comment}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>				
	</div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'contentlist',
    props: ['list'],
    methods: {
      createScroller () {
        this.scroller = new BScroll(this.$refs.wrapper, {
          probeType: 2
        })
      }
    },
    mounted () {
      this.createScroller()
    }
  }
</script>
<style scoped lang="stylus">
.main
	flex: 1
	overflow: hidden
	top: 1.76rem
	.content
		border-bottom: 1px solid #ccc
		margin-bottom: .2rem
		h2
			padding-left: .4rem
			font-size: .32rem
			color: #259
		.container
			display: flex
			width: 95%
			margin: .2rem 0 0 .2rem
			.photo
				width: .5rem
				height: .5rem
				margin: 0 .2rem
			.info
				flex: 1
				display: flex
				flex-direction: column 
				.name
					font-size: 18px
					line-height: 28px
				.time
					font-size: 12px
					margin-bottom: .1rem
					color: #ccc
				.txtCon
					font-size: .30rem;
					line-height: .33rem
					color: #666
				.picCon
					height: 3rem
					margin: .1rem 0
					img
						width: 100%
						height: 3rem
				.footer
					display: flex
					margin-bottom: .2rem
					div
						min-width: .8rem
						margin-right: .3rem
</style>
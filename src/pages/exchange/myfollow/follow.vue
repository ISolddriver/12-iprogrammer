<template>
	<div class="main">
		<div class="head">
			<i class="iconfont back" @click="handleBack">&#xe63f;</i>
			关注
		</div>
		<div class="container">
			<!-- <div class="item">
				<img class="headImg" src="../../default.jpg" alt="头像">
				<div class="des-con">
					<span class="nickname">昵称：于大炮</span>	<br>
					<span class="des">简介：各位朋友，我是于大炮！我三舅贼屌</span>
				</div>				
			</div> -->
			<div class="no-data">
				<img class="no-data-img" src="../../../images/logo.png" alt="no-data">
				<span>暂时没有人关注你哇!</span>
			</div>
		</div>
	</div>
</template>
<script>
  export default {
    name: 'follow',
    methods: {
      handleBack () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped lang="stylus">
.main
	position: absolute
	display: flex
	flex-direction: column
	top: 0
	right: 0
	bottom: 0
	left: 0
	.head
		line-height: .88rem
		text-align: center
		background: #666
		color: #fff
		.back			
			position: absolute
			left: .1rem
	.container
		flex: 1
		.item
			height: 1.2rem
			padding: .2rem 0 .1rem .2rem
			border-bottom: 1px solid #ddd
			color: orange
			.headImg
				width: 1.2rem
				height: 1.2rem
				float: left
				border-radius: .6rem
			.des-con
				height: 1.2rem
				float: left
				padding-left: .2rem
				.des, .nickname
					display: block
					line-height: .4rem
					width: 280px
					overflow: hidden
					text-overflow:ellipsis
					white-space: nowrap
		.no-data
			width: 50%
			height: 2rem
			margin-left: 25%
			text-align: center
			.no-data-img
				width: 100%
</style>
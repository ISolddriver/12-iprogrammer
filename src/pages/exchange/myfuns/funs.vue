<template>
	<div class="main">
		<div class="head">
			<i class="iconfont back" @click="handleBack">&#xe63f;</i>
			Funs
		</div>
		<div class="container">
			<div class="item">
				<img class="headImg" src="../../default.jpg" alt="头像">
				<div class="des-con">
					<span class="nickname">昵称：雾里看花</span>	<br>
					<span class="des">简介：高级java攻城狮</span>
				</div>				
			</div>
		</div>
	</div>
</template>
<script>
  export default {
    name: 'my-funs',
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
</style>
<template>
	<div>
		<div class="info">
			<img src="../error.jpg" class="photo">
			<p class="name">
				<router-link tap="span" class="login" to="/login">登陆</router-link> / 
				<router-link tap="span" class="register" to="register">注册</router-link>
			</p>
			<div class="contact">
				<img src="../../images/1.jpg" class="pic">
				<span class="ipNum">IP号：23453322</span>
			</div>
			<p class="introduce">个人简介: 一个大胖子</p>
			<div class="data">
				<div class="dynamic dataInfo">
					<p>160</p>
					<span>动态</span>
				</div>
				<div class="follow dataInfo">
					<p>160</p>
					<span>关注</span>
				</div>
				<div class="fans dataInfo">
					<p>160</p>
					<span>粉丝</span>
				</div>				
			</div>
		</div>

		<div class="list-con">
			<div class="addr list">
				<i class="iconfont" style="color: #3b2edf">&#xe68b;</i>
				<span>地址</span>
				<span class="iconfont arrowRight">&#xe61b;</span>
			</div>
			<div class="more list">
				<i class="iconfont" style="color: #ff852f">&#xe617;</i>
				<span>更多</span>
				<span class="iconfont arrowRight">&#xe61b;</span>
			</div>
			<div class="setting list">
				<i class="iconfont" style="color: #ffc100">&#xe6a2;</i>
				<span>设置</span>
				<span class="iconfont arrowRight">&#xe61b;</span>
			</div>
		</div>
		<footer-con></footer-con>

	</div>
</template>
<script>
  import footerCon from '../../components/footer/footer'
  export default {
    name: 'mine',
    components: {
      footerCon
    }
  }
</script>
<style scoped lang='stylus'>
	.info
		width: 100%
		height: 5.52rem
		text-align: center
		color: #fff
		background: url(../../images/minebg.jpg) no-repeat center center
		.photo
			width: 1.46rem
			height: 1.46rem
			border-radius: .73rem
			margin: .92rem 0 .2rem 0
		.name
			margin-bottom: .2rem
			font-size: .36rem
			.register, .login
				color: #fff
		.contact
			font-size: .24rem
			margin-bottom: .2rem
			.pic
				width: .32rem
				height: .32rem
		.introduce
			font-size: .36rem
		.data
			height: .8rem
			font-size: .30rem
			margin-top: .4rem
			text-align: center
			.dataInfo
				float: left
			.dynamic, .fans
				width: 2.6rem
			.follow 
				width: 2.2rem
				border-left: 1px solid #fff
				border-right: 1px solid #fff
	.list-con
		font-size: .32rem
		.list
			position: relative
			height: 1.33rem
			line-height: 1.33rem
			padding-left: .1rem
			color: #777e84
			border-bottom: 1px solid #ccc
			.arrowRight
				position: absolute
				right: .2rem
</style>
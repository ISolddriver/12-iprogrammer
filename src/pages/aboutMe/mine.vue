<template>
	<div>
		<div class="info">
			<div class="photoCon">
				<img src="./default.jpg" class="photo">				
			</div>			
			<p class="name" v-show="showInfo">
				<router-link tap="span" class="login" to="/login">登陆</router-link> / 
				<router-link tap="span" class="register" to="register">注册</router-link>
			</p>
			<p class="name" v-show="!showInfo">{{username}}</p>
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
			<router-link class="addr list" tag="div" to="/address">
				<i class="iconfont" style="color: #3b2edf">&#xe68b;</i>
				<span>地址 </span>
				<span>北京市-昌平区</span>
				<span class="iconfont arrowRight">&#xe61b;</span>
			</router-link>
			<div class="more list">
				<i class="iconfont" style="color: #ff852f">&#xe617;</i>
				<span>更多</span>
				<span class="iconfont arrowRight">&#xe61b;</span>
			</div>
			<router-link class="setting list" tag="div" to="/setting">
				<i class="iconfont" style="color: #ffc100">&#xe6a2;</i>
				<span>设置</span>
				<span class="iconfont arrowRight">&#xe61b;</span>
			</router-link>
			<router-link class="rec list" tag="div" to="http://www.hibfe.com/rec/index.html">
				<i class="iconfont" style="color: #0575f2">&#xe65f;</i>
				<span>推广</span>
				<span class="iconfont arrowRight">&#xe61b;</span>
			</router-link>
		</div>
		<footer-con></footer-con>

	</div>
</template>
<script>
  import footerCon from '../../components/footer/footer'
  export default {
    name: 'mine',
    data () {
      return {
        showInfo: true,
        username: ''
      }
    },
    components: {
      footerCon
    },
    methods: {
      changeUserInfo () {
        if (window.localStorage.username) {
          this.showInfo = !this.showInfo
          this.username = window.localStorage.username
        } else {
          this.showInfo = true
        }
      }
    },
    created () {
      this.changeUserInfo()
    }
  }
</script>
<style scoped lang='stylus'>
	.info
		width: 100%
		height: 5.52rem
		text-align: center
		color: #fff
		padding-top: .6rem
		background: url(../../images/minebg.jpg) no-repeat center center
		background-size: cover  
		.photoCon
			width: 1.46rem
			height: 1.46rem
			margin: 0 auto
			text-align: center
			border-radius: .73rem
			overflow: hidden
			.photo
				width: 100%
				height: 100%			
		.name
			margin: .5rem 0 .2rem 0
			font-size: .36rem
			.register, .login
				color: #fff
		.contact
			margin: 0 auto .2rem auto
			font-size: .24rem
		.pic
			width: .32rem
			height: .32rem
		.introduce
			font-size: .36rem
		.data
			height: .8rem
			font-size: .30rem
			margin: .4rem auto 0 auto
			text-align: center
			.dataInfo
				float: left
			.dynamic, .fans
				width: 2.5rem
			.follow 
				width: 2.1rem
				border-left: 1px solid #fff
				border-right: 1px solid #fff
	.list-con
		font-size: .32rem
		.list
			position: relative
			height: 1.33rem
			line-height: 1.33rem
			padding-left: .2rem
			color: #777e84
			border-bottom: 1px solid #ccc
			.arrowRight
				position: absolute
				right: .2rem
</style>
<template>
	<div class="minebg">
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
				<span class="ipNum"><b style="color: #333">IP号：</b>23453322</span>
			</div>
			<p class="introduce">个人简介: 高级工程师</p>
			<div class="data">
				<div class="dynamic dataInfo">
					<p class="num">15</p>
					<span class="data-text">动态</span>
				</div>
				<div class="follow dataInfo">
					<p class="num">241</p>
					<span class="data-text">关注</span>
				</div>
				<div class="fans dataInfo">
					<p class="num">140</p>
					<span class="data-text">粉丝</span>
				</div>				
			</div>
		</div>

		<div class="list-con">
			<router-link class="addr list" tag="div" to="/address">
				<i class="iconfont" style="color: #3b2edf">&#xe68b;</i>
				<span>地址 </span>
				<span>{{mutations.province}}-{{mutations.city}}-{{mutations.area}}</span>
				<span class="iconfont arrowRight">&#xe61b;</span>
			</router-link>
			<router-link class="more list" tag="div" to="/more">
				<i class="iconfont" style="color: #ff852f">&#xe617;</i>
				<span>更多</span>
				<span class="iconfont arrowRight">&#xe61b;</span>
			</router-link>
			<router-link class="setting list" tag="div" to="/setting">
				<i class="iconfont" style="color: #ffc100">&#xe6a2;</i>
				<span>设置</span>
				<span class="iconfont arrowRight">&#xe61b;</span>
			</router-link>
			<router-link class="rec list" tag="div" to="http://www.hibfe.com:3026/rec/rec.html">
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
  import { mapState } from 'vuex'
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
    computed: {
      ...mapState(['mutations'])
    },
    created () {
      this.changeUserInfo()
    }
  }
</script>
<style scoped lang='stylus'>
	.minebg
		background: url(../../images/minebg.png)
		background-size: cover
	.info
		width: 100%
		height: 5.52rem
		text-align: center
		color: #fff
		padding-top: .5rem
		background-size: cover  
		.photoCon
			width: 1.7rem
			height: 1.7rem
			margin: 0 auto
			text-align: center
			border-radius: .94rem
			border: .08rem solid #fff
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
			.ipNum
				color: #666
		.pic
			width: .32rem
			height: .32rem
		.introduce
			font-size: .36rem
			overflow: hidden
			text-overflow: ellipsis
			white-space: nowrap
		.data
			height: .8rem
			margin: .4rem auto 0 auto
			text-align: center
			color: #666
			.data-text
				font-size: .28rem
				line-height: .4rem
				height: .28rem
			.num
				font-size: .38rem
				font-weight: bold
				color: #aaa
			.dataInfo
				float: left
			.dynamic, .fans
				width: 2.5rem
			.follow 
				width: 2.1rem
				border-left: 1px solid #666
				border-right: 1px solid #666
	.list-con
		font-size: .28rem
		.list
			position: relative
			width: 85%
			height: .45rem
			margin: .3rem auto
			padding: .3rem
			line-height: .45rem
			border-radius: 4px 4px 4px 4px
			-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset
			-moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset
			box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset
			color: #777e84
			font-weight: bold
			.arrowRight
				position: absolute
				right: .2rem
</style>
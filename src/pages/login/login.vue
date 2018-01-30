<template>
	<div class="login">
		<div class="logo">
			<img src="../../images/logo.png" alt="">
		</div>
		<div class="loginArea">
			<div class="area">				
				<i class="iconfont icon">&#xe724;</i>				
				<input type="text" placeholder="请输入用户名" class="inputCon" @blur="handleUserName">
			</div>
			<div class="area">				
				<i class="iconfont icon">&#xe608;</i>		
				<input type="password" placeholder="请输入密码" class="inputCon" @input="handlePassword">
			</div>
			<span class="check" v-show="check" style="color: red">用户名密码错误！</span>			
			<div>
				<div class="loginBtn" @click="handleLogin">登陆</div>
			</div>
			<div>
				<a href="javascript:;" class="forgotPwd">忘记密码？</a>
				<a href="javascript:;" class="registerNow" @click="hadleRegister">立即注册</a>
			</div>
			<div class="footer">
				<i>第三方登录</i><br>
				<span class="iconfont loginIcon">&#xe67b;</span>
				<span class="iconfont loginIcon">&#xe628;</span>
				<span class="iconfont loginIcon">&#xe717;</span>
			</div>
		</div>
	</div>
	
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        nameConfirm: false,
        pwdConfirm: false,
        passwordInfo: '',
        check: false
      }
    },
    methods: {
      handleUserName (e) {
        this.username = e.target.value
        console.log(this.username)
        axios.post('/user.action?act=checkLoginName&userName=' + this.username)
         .then(this.handleSucc.bind(this))
         .catch(this.handleErr.bind(this))
      },
      handleSucc (res) {
        console.log(res)
        this.nameConfirm = res.data.ret
        this.nameConfirm = true
        window.localStorage.username = this.username
      },
      handleErr () {
        console.log('error in login')
      },
      handlePassword (e) {
        this.password = e.target.value
      },
      handleLogin () {
        console.log(this.password)
        axios.post('/user.action?act=login&userName=' + this.username + '&password=' + this.password)
         .then(this.handleLoginSucc.bind(this))
         .catch(this.handleLoginErr.bind(this))
      },
      handleLoginSucc (res) {
        console.log(res)
        if (res.data.ret) {
          this.$router.push({path: '/index'})
        } else if (!res.data.ret) {
          this.check = true
        } else {
          this.check = false
        }
      },
      handleLoginErr () {
        console.log('请求错误!')
      },
      hadleRegister () {
        this.$router.push({path: '/register'})
      },
      watch: {
        username () {
          window.localStorage.username = this.username
        }
      }
    }
  }
</script>
<style scoped lang="stylus">
.login
	height: 13.34rem
	background: url(../../images/bg2.png)
	img
		width: 100%;
		height: 5rem
	.loginArea
		display: flex
		flex-direction: column
		width: 5.55rem
		margin: 0 auto
		text-align: center
		.area
			display: flex			
			height: .80rem
			margin-bottom: .2rem 
			.icon
				display: block		 	
			  height: .8rem			
			  line-height: .8rem
			  text-indent: .1rem
			  color: #fff
			  background: #fd5151  	
			.inputCon 
				display: block
				margin-left: .1rem
				padding-left: .15rem
				flex: 1
				height: .80rem
		
	.loginBtn
		height: .8rem
		width: 5.55rem
		margin: .2rem auto .5rem
		line-height: .8rem
		border-radius: 5px
		background: #fff
		color: #fd5151
	.forgotPwd
		position: absolute
		left: 1.2rem
		color: #fff
	.registerNow
		position: absolute
		right: 1.2rem
		color: #fff
	.footer 
		margin-top: 1rem
		color: #fff
		.loginIcon
			display: inline-block
			font-size: .7rem
			margin: .5rem .3rem
</style>

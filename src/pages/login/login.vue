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
				<input type="password" placeholder="请输入密码" class="inputCon" @blur="handlePassword">
			</div>

			<div>
				<div class="leftBox">
					<input type="checkbox" id="password"><label for="password" class="pwdLabel">记住密码</label>
				</div>

				<div class="rightBox">
					<input type="checkbox" id="autoLogin"><label for="autoLogin" class="loginLabel">自动登录</label>
				</div>				
			</div>

			<div>
				<div class="loginBtn" @click="handleLogin">登陆</div>
			</div>
			<div>
				<a href="javascript:;" class="forgotPwd">忘记密码？</a>
				<a href="javascript:;" class="registerNow">立即注册</a>
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
        passwordInfo: ''
      }
    },
    methods: {
      handleUserName (e) {
        this.username = e.target.value
        axios.get('/api/login.json')
         .then(this.handleSucc.bind(this))
         .catch(this.handleErr.bind(this))
      },
      handleSucc (res) {
        this.nameConfirm = res.data.ret
        this.passwordInfo = res.data.data.password
        this.nameConfirm = true
        console.log(this.passwordInfo)
      },
      handleErr () {
        console.log('error in login')
      },
      handlePassword (e) {
        this.password = e.target.value
        if (this.password === this.passwordInfo) {
          this.pwdConfirm = true
        }
      },
      handleLogin () {
        if (this.pwdConfirm && this.nameConfirm) {
          this.$router.push({path: '/'})
        }
      }
    }
  }
</script>
<style scoped lang="stylus">
.login
	position: absolute
	top: 0
	right: 0
	bottom: 0
	left: 0
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

	.leftBox
		position: absolute
		left: 1.2rem 
		color: #fff
		label
			margin-left: .2rem;
	.rightBox
		position: absolute
		right: 1.2rem
		color: #fff
		label
			margin-left: .2rem;		
	.loginBtn
		height: .8rem
		width: 5.55rem
		margin: .5rem auto
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
		margin-top: 1.6rem
		color: #fff
		.loginIcon
			display: inline-block
			font-size: .7rem
			margin: .5rem .3rem
</style>

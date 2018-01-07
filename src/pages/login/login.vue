<template>
	<div>
		<div class="logo">login</div>
		<div class="loginArea">
			<div class="area">
				<div class="icon">
					<i>&yen;</i>
				</div>
				<input type="text" placeholder="请输入用户名" class="inputCon">
			</div>
			<div class="area">
				<div class="icon">
					<i>&yen;</i>
				</div>				
				<input type="text" placeholder="请输入密码" class="inputCon">
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
				<div class="loginBtn">登陆</div>
			</div>
			<div>
				<a href="javascript:;" class="forgotPwd">忘记密码？</a>
				<a href="javascript:;" class="registerNow">立即注册</a>
			</div>
			<div class="footer">
				第三方登录
			</div>
		</div>
	</div>
	
</template>
<script>
  export default {
    name: 'login'
  }
</script>
<style scoped lang="stylus">
.loginArea
	display: flex
	flex-direction: column
	width: 5.55rem
	margin: 0 auto
	text-align: center
	.area
		display: flex
		width: 5.55rem
		height: .80rem
		margin-bottom: .2rem 
		.inputCon 
			display: block
			width: 5rem
			height: .80rem
		.icon
			display: block		 	
		  	height: .8rem
		  	background: #fd5151
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
</style>

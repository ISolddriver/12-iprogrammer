<template>
	<div class="registerArea">
		<div class="head"><i class="back iconfont">&#xe63f;</i>注册账号</div>
		<img src="../../images/logo.png" alt="">
		<div class="inputCon" v-show="hide">
			<phone-num @phoneNumConfirm="handlePhoneNum"></phone-num>			
			<message @messageCode="handleMessageCode"></message>			
		</div>
		<user-info v-show="allRight" @confirm="handleConfirm"></user-info>

		<div class="btn" @click="handleLogin">注册</div>
		<p class="btnDes">点击“获取验证码”按钮，表示同意<span class="agreement"> 注册协议</span></p>
		<div class="queryNumber">
			<span>已有账号？</span><span style="color: #d00" class="login">点击登录</span>
		</div>		
	</div>
</template>
<script>
  import phoneNum from './phoneNum'
  import message from './message'
  import userInfo from './userInfo'
  export default {
    name: 'register',
    components: {
      userInfo,
      phoneNum,
      message
    },
    data () {
      return {
        phoneNum: false,
        verification: false,
        allRight: false,
        hide: true,
        infoConfirm: false
      }
    },
    methods: {
      handlePhoneNum (numInfo) {
        this.phoneNum = numInfo
        if (this.phoneNum) {
          this.handleMessageCode()
        }
      },
      handleMessageCode (codeInfo) {
        this.verification = codeInfo
        if (this.verification) {
          this.allRight = true
          this.hide = false
        }
      },
      handleConfirm (info) {
        var infoRight = info
        if (infoRight.nameConfirm && infoRight.pwdConfirm) {
          this.infoConfirm = true
        }
      },
      handleLogin () {
        if (this.allRight && this.infoConfirm) {
          this.$router.push({path: '/login'})
        }
      }
    }
  }
</script>
<style scoped lang="stylus">
.registerArea
	position: absolute
	top: 0
	right: 0
	bottom: 0
	left: 0
	background: url(../../images/bg2.png)
	.head
		height: .88rem
		background: #fe6869
		font-size: .32rem
		text-align: center
		line-height: .88rem
		color: #fff
		.back
			position: absolute
			top: 0
			left: 10px
			font-size: .32rem
			line-height: .88rem
	img
		width: 70%
		height: 4rem
		margin: 0 0 0 1.1rem  
	.btn 
		height: .88rem
		width: 5.6rem
		text-align: center
		line-height: .88rem
		margin: 0 auto
		font-size: .36rem
		background: #fd6162
		color: #fff
		border-radius: 1rem
	.btnDes
		width: 100%
		font-size: .28rem
		line-height: .88rem
		text-align: center
		.agreement
			color: red
	.queryNumber
		width: 100%
		height: .6rem
		text-align: center
</style>
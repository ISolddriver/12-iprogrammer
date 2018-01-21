<template>
	<div class="registerArea">
		<div class="head"><i class="back iconfont">&#xe63f;</i>注册账号</div>
		<img src="../../images/logo.png" alt="">
		<div class="inputCon" v-show="hide">
			<phone-num @phoneNumConfirm="handlePhoneNum"></phone-num>			
			<message @messageCode="handleMessageCode" :phoneNum="phoneNum"></message>			
		</div>
		<user-info v-show="allRight" @confirm="handleConfirm" :phoneNum="phoneNum"></user-info>

		<div class="btn" @click="handleRegister">注册</div>
		<p class="btnDes">点击“获取验证码”按钮，表示同意<span class="agreement"> 注册协议</span></p>
		<div class="queryNumber">
			<span>已有账号？</span><span style="color: #d00" class="login" @click="handleLogin">点击登录</span>
		</div>		
	</div>
</template>
<script>
  import phoneNum from './phoneNum'
  import message from './message'
  import userInfo from './userInfo'
  import axios from 'axios'
  export default {
    name: 'register',
    components: {
      userInfo,
      phoneNum,
      message
    },
    data () {
      return {
        phoneNum: '',
        phoneInfo: false,
        verification: false,
        allRight: false,
        hide: true,
        infoConfirm: false,
        username: '',
        password: ''
      }
    },
    methods: {
      handlePhoneNum (Info) {
      	console.log(Info.phoneNum)
        this.phoneNum = Info.phoneNum
        this.phoneInfo = Info.phoneInfo
        if (this.phoneInfo) {
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
        console.log(info)
        this.username = info.username
        this.password = info.password
        console.log('点击登录' + this.username, this.password)
        // if (infoRight.nameConfirm && infoRight.pwdConfirm) {
        //   this.infoConfirm = true
        // }
      },
      handleRegister () {
        axios.get('/user.action?act=add&phone=' + this.phoneNum + '&userName=' + this.username +'&password=' + this.password)
         .then(this.handlePasswordSucc.bind(this))
         .catch(this.handlePasswordErr.bind(this))
      },
      handlePasswordSucc (res) {
      	if (res.data.ret) {
      	  console.log('login succ')
          this.$router.push({path: '/index'})
      	}
      },
      handleLogin () {
        this.$router.push({path: '/login'})
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
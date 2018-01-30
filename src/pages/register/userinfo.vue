<template>
	<div>
		<div class="inputCon">
			<div class="inputItem">
				<span class="inputDes">用户名</span> 
				<input type="text" class="des" @blur="handleUsername" placeholder="字母开头(6-8个字符)">
        <i class="nameRight iconfont" v-show="nameRight">&#xe650;{{message}}</i>
        <i class="nameError iconfont" v-show="nameError">&#xe652;{{message}}</i>
			</div>
			<div class="inputItem">
				<span class="inputDes">密码</span> 
				<input type="password" class="des" @input="handlePassword" placeholder="6-12位密码">
			</div>
		</div>
	</div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'userinfo',
    props: ['phoneNum'],
    data () {
      return {
        username: '',
        password: '',
        nameConfirm: false,
        pwdConfirm: false,
        nameRight: false,
        nameError: false,
        message: ''
      }
    },
    methods: {
      handleUsername (e) {
        this.username = e.target.value
        const reg = /^[\u4e00-\u9fff\w]{5,16}$/
        if (reg.test(this.username)) {
          axios.get('/user.action?act=check&userName=' + this.username)
         .then(this.handleUsernameSucc.bind(this))
         .catch(this.handleUsernameErr.bind(this))
        } else {
          this.nameRight = false
          this.nameError = true
        }
      },
      handleUsernameSucc (res) {
        console.log(res.data.message)
        this.message = res.data.message
        res.data.ret ? this.nameConfirm = true : this.nameConfirm = false
        this.nameConfirm = res.data.ret
        if (res.data.ret) {
          this.nameRight = true
          this.nameError = false
        } else {
          this.nameRight = false
          this.nameError = true
        }
      },
      handleUsernameErr () {
        console.log('bad username')
      },
      handlePassword (e) {
        const pwd = e.target.value
        // const reg = /^[a-zA-Z]\w{6,12}$/
        console.log('密码ok')
        this.handleAddPassword(pwd)
      },
      handleAddPassword (pwd) {
        console.log(pwd, this.phoneNum, this.username)
        const password = pwd
        const userInfo = {
          password: password,
          username: this.username
        }
        this.getStatus(userInfo)
      },
      // handlePasswordSucc (res) {
      //   console.log(res)
      //   res.data.ret ? this.pwdConfirm = true : this.pwdConfirm = false
      //   console.log(this.pwdConfirm)
      //   this.getStatus()
      // },
      // handlePasswordErr () {
      //   console.log('error')
      // },
      getStatus (userInfo) {
        console.log('给父组件传递用户名，密码')
        this.$emit('confirm', userInfo)
      }
    }
  }
</script>
<style scoped lang="stylus">
.inputCon 
	padding-top: .9rem
	.inputItem
		position: relative
		height: .88rem
		width: 100%
		margin-bottom: 1.1rem
		color: #fe6869
		background: #fff
		.inputDes
			display: block
			width: 30%
			float: left
			text-align: center
			line-height: .88rem
		.des
			display: block
			width: 40%
			height: .88rem
			float: left
			border: none
		.nameRight 
			position: absolute
			top: .32rem
			right: .2rem
			font-size: .32rem
			font-weight: 900
			color: green
		.nameError 
			position: absolute
			top: .32rem
			right: .2rem
			font-size: .32rem
			font-weight: 900
			color: red
</style>
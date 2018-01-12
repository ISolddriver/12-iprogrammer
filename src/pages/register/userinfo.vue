<template>
	<div>
		<div class="inputCon">
			<div class="inputItem">
				<span class="inputDes">用户名</span> 
				<input type="text" class="des" @blur="handleUsername" placeholder="字母开头(6-8个字符)">
        <i class="nameRight iconfont" v-show="nameRight">&#xe650;</i>
        <i class="nameError iconfont" v-show="nameError">&#xe652;</i>
			</div>
			<div class="inputItem">
				<span class="inputDes">密码</span> 
				<input type="password" class="des" @blur="handlePassword" placeholder="6-12位密码">
			</div>
		</div>
	</div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'userinfo',
    data () {
      return {
        username: '',
        password: '',
        nameConfirm: false,
        pwdConfirm: false,
        nameRight: false,
        nameError: false
      }
    },
    methods: {
      handleUsername (e) {
        this.username = e.target.value
        var reg = /^[\u4e00-\u9fff\w]{5,16}$/
        if (reg.test(this.username)) {
          this.nameRight = true
          this.nameError = false
          axios.get('/api/userInfo.json?' + this.username)
         .then(this.handleUsernameSucc.bind(this))
         .catch(this.handleUsernameErr.bind(this))
        } else {
          this.nameRight = false
          this.nameError = true
        }
      },
      handleUsernameSucc (res) {
        res.data.ret ? this.nameConfirm = true : this.nameConfirm = false
        console.log(this.nameConfirm)
      },
      handleUsernameErr () {
        console.log('bad username')
      },
      handlePassword (e) {
        this.password = e.target.value
        axios.get('/api/password.json?' + this.password)
         .then(this.handlePasswordSucc.bind(this))
         .catch(this.handlePasswordErr.bind(this))
      },
      handlePasswordSucc (res) {
        res.data.ret ? this.pwdConfirm = true : this.pwdConfirm = false
        console.log(this.pwdConfirm)
        this.getStatus()
      },
      handlePasswordErr () {
        console.log('error')
      },
      getStatus () {
        var info = {
          nameConfirm: this.nameConfirm,
          pwdConfirm: this.pwdConfirm
        }
        this.$emit('confirm', info)
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
			right: 2rem
			font-size: .32rem
			font-weight: 900
			color: green
		.nameError 
			position: absolute
			top: .32rem
			right: 2rem
			font-size: .32rem
			font-weight: 900
			color: red
</style>
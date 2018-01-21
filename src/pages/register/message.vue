<template>
	<div class="inputCon">
		<div class="inputItem">
				<span class="inputDes">短信验证码</span> 
				<input type="text" class="des" @blur="handleInputCode">
				<span class="verificationCode" @click="handleGetCode">点击获取验证码</span>
		</div>
	</div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'message',
    props: ['phoneNum'],
    data () {
      return {
        codeInfo: '0',
        codeNum: 0,
        verification: false
      }
    },
    methods: {
      handleGetCode () {
        console.log(this.phoneNum)
        axios.get('/user.action?act=sendCode&phone=' + this.phoneNum)
         .then(this.handleGetCodeSucc.bind(this))
         .catch(this.handleGetCodeErr.bind(this))
      },
      handleGetCodeSucc (res) {
        console.log(res)
      },
      handleGetCodeErr () {
        console.log('get error')
      },
      handleInputCode (e) {
        this.codeNum = e.target.value
        console.log(this.phoneNum, this.codeNum)
        axios.get('/user.action?act=checkCode&phone=' + this.phoneNum + '&code=' + this.codeNum)
         .then(this.handleCodeSucc.bind(this))

        // if (this.codeNum === this.codeInfo) {
        //   this.verification = true
        // } else {
        //   this.verification = false
        //   console.log('验证码错误')
        // }
        // this.$emit('messageCode', this.verification)
      },
      handleCodeSucc (res) {
        console.log(res.data.ret)
        this.verification = res.data.ret
        this.$emit('messageCode', this.verification)
      }
    }
  }
</script>
<style scoped lang="stylus"> 
	.inputCon 
		padding-top: .9rem
		.inputItem
			height: .88rem
			width: 100%
			margin-bottom: .5rem
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
			.verificationCode
				line-height: .88rem
</style>
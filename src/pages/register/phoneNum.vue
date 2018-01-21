<template>
	<div>
		<div class="inputItem">
				<span class="inputDes">手机号 (+86)</span>
				<i class="numRight iconfont" v-show="right">&#xe650;</i>
				<i class="numError iconfont" v-show="error">&#xe652;</i>
				<input type="text" class="des" @blur="handleNumberInput">
		</div>	
	</div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'phone-num',
    data () {
      return {
        phoneNum: 0,
        phoneReg: false,
        phoneInfo: false,
        right: false,
        error: false
      }
    },
    methods: {
      handleNumberInput (e) {
        this.phoneNum = e.target.value
        const reg = /^1[3|4|5|8|7][0-9]\d{4,8}$/
        reg.test(this.phoneNum) ? this.phoneReg = true : this.phoneReg = false
        if (this.phoneReg) {
          this.right = true
          this.error = false
          this.getRegisterInfo(this.phoneNum)
        } else {
          this.error = true
          this.right = false
        }
      },
      getRegisterInfo (phoneNum) {
        console.log(this.phoneNum)
        this.phoneNum = phoneNum
        axios.get('/user.action?act=checkPhone&phone=' + this.phoneNum)
         .then(this.handleSucc.bind(this))
         .catch(this.handleError.bind(this))
      },
      handleSucc (res) {
        console.log(res)
        this.phoneInfo = res.data.ret
        const info = { 
          phoneInfo: this.phoneInfo,
          phoneNum: this.phoneNum
        }
        this.$emit('phoneNumConfirm', info)
      },
      handleError () {
        this.phoneInfo = false
        console.log('error')
      }
    }
  }
</script>
<style scoped lang="stylus">
		.inputItem
			position: relative
			height: .88rem
			width: 100%
			margin: .3rem 0
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
			.numRight
				position: absolute
				top: .32rem
				right: 2rem
				font-size: .32rem
				font-weight: 900
				color: green
			.numError
				position: absolute
				top: .32rem
				right: 2rem
				font-size: .32rem
				font-weight: 900
</style>
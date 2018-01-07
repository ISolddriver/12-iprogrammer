<template>
	<div>
		<div class="head"><i class="back"><</i>注册账号</div>
		<div class="inputCon">
			<div class="inputItem">
				<span class="inputDes">中国大陆</span> 
				<input type="text" class="des">
			</div>
			<div class="inputItem">
				<span class="inputDes">+86</span> 
				<input type="text" class="des">
			</div>
		</div>
		<div class="btn">获取验证码</div>
		<p class="btnDes">点击“获取验证码”按钮，表示同意<span class="agreement">注册协议</span></p>
	</div>
</template>
<script>
  export default {
    name: 'register'
  }
</script>
<style scoped lang="stylus">
	.head
		height: .88rem;
		background: #fe6869;
		font-size: .32rem;
		text-align: center;
		line-height: .88rem;
		color: #fff;
		.back
			position: absolute;
			top: 0;
			left: 10px;
			font-size: .32rem;
			line-height: .88rem;
	.inputCon 
		padding-top: .9rem;
		.inputItem
			height: .88rem;
			width: 100%;
			margin-bottom: 1.1rem;
			color: #fe6869;
			background: #fff
			.inputDes
				display: block;
				width: 30%;
				float: left;
				text-align: center;
				line-height: .88rem;
			.des
				display: block;
				width: 60%;
				height: .88rem;
				float: left;
				border: none;
	.btn 
		height: .88rem;
		width: 5.6rem;
		text-align: center;
		line-height: .88rem;
		margin: 0 auto;
		background: #fd6162;
		color: #fff;
		border-radius: 1rem;
	.btnDes
		width: 100%;
		font-size: .28rem;
		line-height: .88rem;
		text-align: center;
		.agreement
			color: #fd6162;
</style>
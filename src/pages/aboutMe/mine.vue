<template>
	<div>
		<div class="head">
			<i class="back"> < </i>
			<div class="myName">我的信息</div>
		</div>
		<div class="info">
			<img src="../discovery/1.jpg" class="photo">
			<span class="nickname">昵称：于大炮</span>
			<span class="ipNum">ip号: 1897262626</span>
			<span class="introduce">个人简介</span>
			<div class="introduceCon">一人我饮酒醉</div>
			<div class="more">更多</div>
			<div class="address">我的地址</div>
			<p class="addressCon">沙河老牛湾</p>
			<div class="setting">设置</div>
		</div>
		<footer-con></footer-con>
	</div>
</template>
<script>
  import footerCon from '../../components/footer/footer'
  export default {
    name: 'mine',
    components: {
      footerCon
    }
  }
</script>
<style scoped lang='stylus'>
	.head
		display: flex
		height: .88rem
		line-height: .88rem
		background: #d00
		.back
			width: .5rem
			position: absolute
			left: .1rem
			font-size: 24px
			font-weight: 900
		.myName
			width: 100%
			font-size: 20px
			text-align: center	
	.info
		display: flex
		flex-direction: column
		.photo
			width: 1.5rem
			height: 1.5rem
		.nickname	
			font-size: 18px
		.ipNum 
			font-size: 18px
		.introduce
			font-size: 18px
		.introduceCon
			width: 80%
			height: 2rem
			background: #fff
		.more
			font-size: 18px
		.address
			font-size: 18px
		.addressCon	
			font-size: 16px	
		.setting
			font-size: 18px
</style>
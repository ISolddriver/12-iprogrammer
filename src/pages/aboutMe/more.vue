<template>
	<div class="main">
		<div class="head">
			<i class="iconfont back" @click="handleBack">&#xe63f;</i>
			关于我们
		</div>
		<img src="../../images/logo.png" alt="" class="logo">
		<p class="des">
			v1.0.5<br>
			请持续关注我们，我们会做的更好
		</p>
	</div>	
</template>
<script>
  export default {
    name: 'more',
    methods: {
      handleBack () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="stylus" scoped>
.main
	text-align: center
	.head
		height: .88rem
		text-size: .32rem
		line-height: .88rem
		text-align: center
		color: #fff
		background: #666
	.back
		position: absolute
		left: .2rem
	.logo
		width: 100%
		height: 270px
	.des
		line-height: .48rem
		color: #fe2322
</style>
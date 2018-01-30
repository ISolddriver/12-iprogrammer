<template>
	<div class="main border-bottom">
		<div class="inputCon">
			<input type="text" placeholder="发现不一样，发现你不知道">
		</div>
	</div>
</template>
<script>
  export default {
    name: 'search-info'
  }
</script>
<style scoped lang='stylus'>
.main
	height: .8rem
	top: .88rem
	.inputCon
		width: 70%
		height: .5rem
		margin: .1rem auto
		text-align: left
		background: #fff
		input
			width: 100%
			height: .5rem
			border: 1px solid #ccc
			border-radius: .3rem
			padding-left: .3rem
</style>
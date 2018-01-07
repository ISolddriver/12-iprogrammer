<template>
	<div>
		<div class="container">
			<img src="./1.jpg" class="photo">
			<div class="info">
				<span class="name">爱迪生</span>
				<span class="time">1天前</span>
				<p class="txtCon">海霞红，山烟翠。故都风景繁华地。谯门画戟，下临万井，金碧楼台相倚。芰荷浦
　　溆，杨柳汀洲，映虹桥倒影，兰舟飞棹，游人聚散，一片湖光里。
　　汉元侯，自从破虏征蛮，峻陟枢庭贵。筹帷厌久，盛年昼锦，归来吾乡我里。铃斋
　　少讼，宴馆多欢，未周星，便恐皇家，图任勋贤，又作登庸计</p>
				<div class="picCon">
					<img src="./1.jpg" class="pic">
				</div>
				<div class="footer">
					<div class="forward">转发 123</div>
					<div class="fabulous">点赞 222</div>
					<div class="comment">评论 222</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  export default {
    name: 'contentlist'
  }
</script>
<style scoped lang="stylus">
	.container
		display: flex
		width: 95%
		margin: .4rem 0 0 .2rem
		.photo
			width: .5rem
			height: .5rem
			margin: 0 .2rem
		.info
			flex: 1
			display: flex
			flex-direction: column 
			.name
				font-size: 18px
				line-height: 28px
			.time
				font-size: 12px
				margin-bottom: .1rem
				color: #ccc
			.txtCon
				color: #666
			.picCon
				margin: .2rem 0
			.footer
				display: flex
				div
					min-width: .8rem
					margin-right: .3rem
</style>
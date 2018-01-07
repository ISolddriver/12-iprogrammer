<template>
	<div>
		<div class="head">
			<span class="follow">关注</span>
			<span class="classify">分类</span>
			<span class="channel">频道</span>
		</div>
		<div>search</div>
		<div class="content">
			<img src="../discovery/1.jpg" class="photo">
			<div class="info">
				<span class="name">于大炮</span>
				<img src="../discovery/1.jpg" class="pic">
				<p class="introduce">海霞红，山烟翠。故都风景繁华地。谯门画戟，下临万井，金碧楼台相倚。芰荷浦
　　溆，杨柳汀洲，映虹桥倒影，兰舟飞棹，游人聚散，一片湖光里。
　　汉元侯，自从破虏征蛮，峻陟枢庭贵。筹帷厌久，盛年昼锦，归来吾乡我里。铃斋
　　少讼，宴馆多欢，未周星，便恐皇家，图任勋贤，又作登庸计</p>
				<p class="desc">海霞红，山烟翠。故都风景繁华地。谯门画戟，下临万井，金碧楼台相倚。芰荷浦
　　溆，杨柳汀洲，映虹桥倒影，兰舟飞棹，游人聚散，一片湖光里。
　　汉元侯，自从破虏征蛮，峻陟枢庭贵。筹帷厌久，盛年昼锦，归来吾乡我里。铃斋
　　少讼，宴馆多欢，未周星，便恐皇家，图任勋贤，又作登庸计</p>
			</div>
		</div>
	</div>
</template>
<script>
  export default {
    name: 'recommend'
  }
</script>
<style scoped lang='stylus'>
	.head
		height: .88rem
		display: flex
		line-height: .88rem
		text-align: center
		font-size: 18px
		background: #f00
		.follow
			width: 1rem
		.classify
			flex: 1
		.channel
			width: 1rem
	.content
		display: flex
		.photo
			height: .5rem
			width: .5rem
		.info
			flex: 1
			display: flex
			flex-direction: column
		.name
			margin-bottom: .2rem
		.pic
			width: 5.5rem
			height: 1.5rem
			margin-bottom: .2rem
		.introduce
			margin-bottom: .2rem
			font-size: 12px
			color: #666
		.desc
			margin-bottom: .2rem
</style>
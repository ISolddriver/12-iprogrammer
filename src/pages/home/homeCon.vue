<template>
  <div class="main">
  	<div class="info">
  		<div class="photo">
  			<img src="../1.jpg">
  		</div>  		
  		<div class="author">于大炮分享</div>
  		<div class="time">2小时前</div>
  		<i class="">...</i>
  	</div>
  	<div class="content">
  		<div class="pic">
  			<img src="../1.jpg">
  		</div>  
  		<h3>柳永 蝶恋花</h3>		
  		<p>海霞红，山烟翠。故都风景繁华地。谯门画戟，下临万井，金碧楼台相倚。芰荷浦
　　溆，杨柳汀洲，映虹桥倒影，兰舟飞棹，游人聚散，一片湖光里。
　　汉元侯，自从破虏征蛮，峻陟枢庭贵。筹帷厌久，盛年昼锦，归来吾乡我里。铃斋
　　少讼，宴馆多欢，未周星，便恐皇家，图任勋贤，又作登庸计</p>
  	</div>
  </div>
</template>

<script>
  export default {
    name: 'head-con'
  }
</script>

<style scoped lang="stylus">
.main
	flex: 1
	top: 2.7rem
	.info
		display: flex
		img
			width: 100%	
		.photo
			width: 1rem
			height: 1rem
			border-radius: .05rem
		.content
			width: 100%
			.pic
				width: 100%
				height: 0
				padding-bottom: 33.5%
				background: #d00 
</style>
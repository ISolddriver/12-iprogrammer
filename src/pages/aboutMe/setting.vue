<template>
	<div>
		<div class="info">
			<div class="photoCon">
				<img src="./default.jpg" class="photo">				
			</div>					
		</div>
		<div class="list-con">
			<div class="addr list">					
				<p class="name" v-show="!showInfo">{{username}}</p>
			</div>
			<div class="addr list">
				<i class="iconfont" style="color: #3b2edf">&#xe68b;</i>								
				<span class="ipNum">性别: 男</span>
				<span class="editBtn">可编辑</span>
			</div>
			<div class="addr list">
				<i class="iconfont" style="color: #3b2edf">&#xe68b;</i>
				<span>个人简介: 一个大胖子</span>
				<span class="editBtn">可编辑</span>
			</div>
			<div class="addr list">
				<i class="iconfont" style="color: #3b2edf">&#xe68b;</i>
				<span>地址:</span>
				<span>北京市-昌平区</span>
				<span class="editBtn">可编辑</span>
			</div>
			<div class="addr list">
				<i class="iconfont" style="color: #3b2edf">&#xe68b;</i>
				<span>退出登录</span>
			</div>
		</div>
		<footer-con></footer-con>

	</div>
</template>
<script>
  import footerCon from '../../components/footer/footer'
  export default {
    name: 'mine',
    data () {
      return {
        showInfo: true,
        username: ''
      }
    },
    components: {
      footerCon
    },
    methods: {
      changeUserInfo () {
        if (window.localStorage.username) {
          this.showInfo = !this.showInfo
          this.username = window.localStorage.username
        } else {
          this.showInfo = true
        }
      }
    },
    created () {
      this.changeUserInfo()
    }
  }
</script>
<style scoped lang='stylus'>
	.info
		width: 100%
		.photoCon
			width: 1.46rem
			height: 1.46rem
			text-align: center
			margin-left: 3rem
			padding-top: .6rem
			.photo
				width: 100%
				height: 100%
				border-radius: .73rem
		.contact
			font-size: .24rem
			margin-bottom: .2rem
		.pic
			width: .32rem
			height: .32rem
		.introduce
			font-size: .36rem
	.list-con
		font-size: .32rem
		.name
			text-align: center
			font-size: .36rem
		.list
			position: relative
			height: 1.33rem
			line-height: 1.33rem
			padding-left: .2rem
			color: #777e84
			border-bottom: 1px solid #ccc
		.editBtn
			position: absolute
			right: .3rem
			top: .3rem
			line-height: .6rem
			padding: 0 .2rem 0 .2rem
			border: 1px solid #ccc
			border-radius: .2rem
			.arrowRight
				position: absolute
				right: .2rem
</style>
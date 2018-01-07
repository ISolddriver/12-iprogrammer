<template>
	<div>
		<div class="head">
			<img src="./1.jpg" alt="">
			<div class="title">发现</div>
			<div class="recommendBtn">推荐频道</div>
		</div>
		<search-info></search-info>
		<content-list></content-list>
	</div>
</template>
<script>
  import searchInfo from './searchInput.vue'
  import contentList from './content.vue'
  import axios from 'axios'
  export default {
    name: 'discovery',
    components: {
      searchInfo,
      contentList
    },
    methods: {
      getDiscoverData () {
        axios.get('/api/discovery.json')
         .then(this.handleDataSucc.bind(this))
         .catch(this.handleError.bind(this))
      },
      handleDataSucc (res) {
        console.log(res)
      },
      handleError () {
        alert('error')
      }
    },
    created () {
      this.getDiscoverData()
    }
  }
</script>
<style scoped lang="stylus">
	.head
		display: flex
		width: 100%
		height: .88rem
		line-height: .88rem
		background: #d00
		img
			height: .5rem
			width: .5rem
			margin-top: .15rem
			margin-left: .2rem
		.title 
			flex: 1
			text-align: center
			font-size: 18px
		.recommendBtn
			height: .88rem
			width: 1.3rem
</style>
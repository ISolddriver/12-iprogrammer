<template>
	<div class="main">
		<div class="head">
			<div class="title">发现</div>
		  <router-link tag="div" to="/index" class="recommendBtn">探索一下</router-link>
		</div>
		<search-info></search-info>
		<content-list :list="list"></content-list>
    <footer-con></footer-con>
	</div>
</template>
<script>
  import searchInfo from './searchInput.vue'
  import contentList from './content.vue'
  import footerCon from '../../components/footer/footer'
  import axios from 'axios'
  export default {
    name: 'discovery',
    data () {
      return {
        list: []
      }
    },
    components: {
      searchInfo,
      contentList,
      footerCon
    },
    methods: {
      getDiscoverData () {
        axios.get('/static/discovery.json')
         .then(this.handleDataSucc.bind(this))
         .catch(this.handleError.bind(this))
      },
      handleDataSucc (res) {
        this.list = res.data.data.comments
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
.main
	position: absolute
	top: 0
	right: 0
	bottom: 0
	left: 0
	display: flex
	flex-direction: column
	.head
		width: 100%
		height: .88rem
		line-height: .88rem
		background: #666
		color: #fff
		.title 
			text-align: center
			font-size: 18px
</style>
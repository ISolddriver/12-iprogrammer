<template>
	<div>
		<div class="head">修改地址</div>
		<div class="addr-container">
			<v-distpicker type="mobile" 
										:placeholders='placeholders'
										class="addr"
										style="height: 400px"
										@selected="onSelected">
			</v-distpicker>
		</div>
	</div>
</template>
<script>
  import VDistpicker from 'v-distpicker'
  import { mapMutations } from 'vuex'
  export default {
    name: 'set-address',
    components: {
      VDistpicker
    },
    data () {
      return {
        placeholders: {
          province: '',
          city: '',
          area: ''
        }
      }
    },
    methods: {
      ...mapMutations(['changeAddr']),
      onSelected (data) {
        this.changeAddr({province: data.province.value, city: data.city.value, area: data.area.value})
        this.$router.push('/mine')
      }
    }
  }
</script>
<style lang="stylus" scoped>
	.head
		line-height: .88rem
		text-align: center
		font-size: .32rem
		color: #fff
		background: #666
	.addr-container
		padding: .5rem .5rem .2rem .5rem
		.addr
			height: auto
			overflow: auto
			border: 1px solid #666
</style>
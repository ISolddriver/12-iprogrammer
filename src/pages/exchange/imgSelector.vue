<template>
	<div class="container">
		<input class="file" name="file" type="file" accept="" @change="update"/> 
	</div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'img-selector',
    methods: {
      update (e) {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('file', file, file.name)
        const config = {
          headers: {'Content-Type': 'multipart/form-data'}
        }
        axios.post('/api/user.json', formData, config)
         .then(this.handleSendSucc.bind(this))
         .catch(this.handleSendErr.bind(this))
      },
      handleSendSucc (res) {
        console.log(res)
      },
      handleSendErr () {
        console.log('send pic err')
      }
    }
  }
</script>

<style scoped lang="stylus">
	.container 
		height: .88rem
		margin-bottom: 1.88rem
</style>
<template>
  <div class="classify">
    <div class="width-box" v-for="item in classifyInfo">
      <div class="classify-con" :style="{background: item.bgColor}">{{item.classifyName}}</div>
    </div>  
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'homeClassify',
    data () {
      return {
        classifyInfo: [],
        classifyBg: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/category.action?act=list')
          .then(this.handleGetDataSucc.bind(this))
      },

      handleGetDataSucc (res) {
        console.log(res)
        res = res ? res.data : null
        if (res && res.ret && res.data) {
          this.classifyInfo = res.data.classify
          this.classifyBg = res.data.bgClassify
        } else {
          this.handleDataError()
        }
      },
      handleDataError () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style scoped lang="stylus">
  .classify
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    padding-top: .4rem
    .width-box
      float: left
      .classify-con
        width: 2.4rem
        height: .8rem
        margin: 0 .4rem
        text-align: center
        line-height: .8rem
        border-radius: .05rem
        background: #ffecdb
</style>

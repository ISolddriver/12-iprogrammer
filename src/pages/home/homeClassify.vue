<template>
  <div class="classify">
    <div class="width-box" v-for="(item, index) in classifyInfo" @click="handleClassifyClick" :data-index="item.id">
      <div class="classify-con" :style="{background: style[index]}" >{{item.title}}</div>
    </div>
    <router-view></router-view>  
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'homeClassify',
    data () {
      return {
        classifyInfo: [],
        classifyBg: [],
        style: []
      }
    },
    watch: {
      classifyInfo () {
        this.getColor()
      }
    },
    methods: {
      getIndexData () {
        axios.post('/category.action?act=list')
          .then(this.handleGetDataSucc.bind(this))
      },
      getRandomColor () {
        const arr = ('1234567890abcdef').split('')
        let color = '#'
        for (let i = 0; i < 6; i++) {
          color += arr[Math.round(Math.random() * 15)]
        }
        return color
      },
      getColor () {
        this.classifyInfo.forEach(() => {
          this.style.push(this.getRandomColor())
        })
      },
      handleGetDataSucc (res) {
        // console.log(res)
        res = res ? res.data : null
        if (res && res.ret && res.data) {
          this.classifyInfo = res.data.categories
          this.classifyBg = res.data.bgClassify
        } else {
          this.handleDataError()
        }
      },
      handleDataError () {
        console.log('error')
      },

      handleClassifyClick (e) {
        const target = e.currentTarget
        const index = parseInt(target.getAttribute('data-index'), 10)
        this.$router.push({
          name: 'classify-detail',
          params: { id: index }
        })
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
    flex: 1
    flex-wrap: wrap
    justify-content: space-around
    padding-top: .4rem
    padding-bottom: 1rem
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
        color: #fff
        font-size: .32rem
</style>

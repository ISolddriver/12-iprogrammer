<template>
  <form>
    <div class="header border-bottom">
      <i @click="handleBackClick" class="iconfont back-icon">&#xe63f;</i>
      发表文章
      <i @click="submitForm($event)" class="iconfont push-icon">&#xe6ec;</i>
    </div>
    <div class="publish-con">
      <div class="push-classify">
        <i class="classify-text">分类:</i>
        <select name="it-classify" id="it-classify" v-model="selected">
          <option value="HTML5">HTML5前端</option>
          <option value="UI">UI设计</option>
          <option value="JAVA">JAVA后端</option>
          <option value="PYTHON">PYTHON后端</option>
          <option value="LINUX">LINUX后端</option>
          <option value="PHP">PHP后端</option>
          <option value="TEST">TEST测试</option>
          <option value="OPERATION">OPERATION运维</option>
        </select>
      </div>
      <div class="textarea-border">
        <input class="title-con" type="text" placeholder="标题" v-model="title"/>
        <textarea autofocus="true" required="true" class="textarea-con" v-model="text" placeholder="内容区,写点什么吧!"></textarea>
      </div>
      <div class="upload-img">
        <input class="file" name="file" type="file" accept="" @change="getFile($event)" /> 
      </div>
    </div>
    <div class="footer"></div>
  </form>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'publish',
    data () {
      return {
        title: '',
        file: '',
        text: '',
        selected: 'HTML5',
        status: false
      }
    },
    methods: {
      handleBackClick () {
        this.$router.go(-1)
      },
      getFile (event) {
        this.file = event.target.files[0]
        console.log(this.file)
      },
      submitForm (event) {
        if (!this.status) {
          alert('请登录后发表')
        }
        event.preventDefault()
        const formData = new FormData()
        if (this.title === '' || this.text === '' || this.selected === '') {
          alert('请填写全')
        } else {
          formData.append('cover', this.file)
          formData.append('title', this.title)
          formData.append('content', this.text)
          formData.append('selected', this.selected)

          const config = {
            headers: {'Content-Type': 'multipart/form-data'}
          }
          axios.post('/blog.action?act=add', formData, config)
           .then(this.handleSendSucc.bind(this))
           .catch(this.handleSendErr.bind(this))
        }
      },
      handleSendSucc (res) {
        console.log(res)
        this.$router.push('/index')
      },
      handleSendErr () {
        console.log('send pic err')
      },
      getUser () {
        if (window.localStorage.username) {
          this.status = true
        } else {
          this.status = false
        }
      }
    },
    created () {
      this.getUser()
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/style/common/varibles.styl'
  .header
    height: 1rem
    width: 100%
    line-height: 1rem
    text-align: center
    font-size: .36rem
    color: $fontColor
    background: $bgColor
    &::before
      border-color: $borderColor
    .back-icon
      position: absolute
      left: .25rem
      font-size: .4rem!important
    .push-icon
      position: absolute
      right: .25rem
      font-size: .4rem!important
  .publish-con
    position: absolute
    top: 1rem
    bottom: 0
    left: 0
    right: 0
    color: $fontColor
    background: #f1f1f1
    .push-classify
      position: relative
      .classify-text
        padding: 0 .3rem
      #it-classify
        position: absolute
        top: .1rem
        right: .4rem
        height: .6rem
        padding-left: .2rem
        border-radius: .2rem
        background: linear-gradient(to bottom, #f1f1f1, #ddd, #f7f7f7)
    .textarea-border
      margin-top: .2rem
      margin-left: 4%
      width: 92%
      height: 5rem
      border: 1px solid #ddd
      border-radius: .2rem
      box-shadow: .03rem .03rem .05rem #cdcdcd
      background: #fff
    .title-con
      width: 96%
      height: .6rem
      line-height: .6rem
      margin-top: .1rem
      margin-left: 2%
      border-bottom: 1px dashed #ccc
    .textarea-con
      width: 96%
      height: 3.9rem
      margin-top: .15rem
      margin-left: 2%
      resize: none
    .upload-img, .push-classify
      width: 92%
      height: .8rem
      line-height: .8rem
      margin-left: 4%
      margin-top: .2rem
      border-radius: .2rem
      border: 1px solid #ddd
      box-shadow: .02rem .02rem .05rem #cdcdcd
      background: #fff
  .footer
    width: 100%
</style>
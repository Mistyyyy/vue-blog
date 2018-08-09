<template>
  <div class="main-container">
    <h1>修改</h1>
    <h2>标题</h2>
    <textarea v-model="title" class="title"></textarea>
    <h2>这是文章主体</h2>
    <textarea v-model="content" class="content"></textarea>
    <div class="button">
      <button @click="sendArticle">保存</button>
    </div>
  </div>
</template>
<script>
import { getStorage, delStorage } from '@/cookie/operateCookie'
import { request } from '@/utils/response'
export default {
  data () {
    return {
      title: getStorage('articleTitle'),
      content: getStorage('articleContent'),
      articleId: getStorage('articleId')
    }
  },
  created () {
    delStorage('articleTitle')
    delStorage('articleContent')
    delStorage('articleId')
  },
  methods: {
    sendArticle () {
      request({
        method: 'put',
        url: `/articles/${this.articleId}`,
        header: {'Content-Type': 'application/json'},
        data: {
          title: this.title,
          content: this.content,
          uid: this.$store.state.userInfo,
          token: this.$store.state.USER_TOKEN
        }
      })
        .then((value) => {
          if (value.code === -1) {
            alert(value.message)
            return false
          } else {
            this.$router.push('/index')
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.main-container{
  margin: 100px auto 0px;
  width: 700px;
  text-align: left;
}
.title{
  font-size: 20px;
  min-height: 100px;
}
textarea {
  resize: none;
  background: aliceblue;
  width: 100%;
  outline: none;
  color: #000;
  font-size: 14px;
  line-height: 1.4;
}
.content{
  min-height: 500px;
}
.button{
  text-align: center;
}
button{
  width: 100px;
  line-height: 40px;
  border-radius: 40px;
  font-size: 18px;
  background: #5bb75b;
  color: #fff;
  outline: none;
  border: none;
}
</style>

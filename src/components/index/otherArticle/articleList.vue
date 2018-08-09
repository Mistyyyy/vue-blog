<template>
  <div class="js-article">
    <router-link class="js-at-title" :to="path"><h3>{{ article.title }}</h3></router-link>
    <div class="js-image">
      <img src="" alt="">
    </div>
    <p class="js-pra">{{ article.content }}</p>
    <div class="js-tool" v-if="userId == articleId">
      <a @click="update">修改</a>
      <a @click="cancel">删除</a>
    </div>
  </div>
</template>
<script>
import { setStorage } from '@/cookie/operateCookie'
export default {
  data () {
    return {
    }
  },
  computed: {
    path () {
      return `/p/${this.article.id}`
    },
    userId () {
      return this.$store.state.userInfo
    },
    articleId () {
      return this.article.user_id
    }
  },
  props: ['article'],
  inject: ['reload'],
  methods: {
    update () {
      setStorage('articleTitle', this.article.title)
      setStorage('articleContent', this.article.content)
      setStorage('articleId', this.article.id)
      this.$router.push('/updateArticle')
    },
    cancel () {
      this.$http({
        method: 'delete',
        url: `/articles/${this.article.id}/token/${this.$store.state.USER_TOKEN}`,
        header: {'Content-Type': 'application/json'}
      })
        .then((response) => {
          if (response.data.code !== -1) {
            this.reload()
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
.js-article{
  width: 100%;
  min-height:140px;
  margin-top: 10px;
  padding: 10px 0px;
  color: #000;
  border-top: 1px solid #ccc;
  text-align: left;
  a{
    text-align: none;
    color: inherit;
  }
  .js-at-title{
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  &:hover{
    text-decoration: underline;
  }
  h4{
    margin: 0px;
  }
  }
.js-image{
  font-size: 0;
  float: right;
  }
.js-pra{
  font-size: 12px;
  line-height: 1.3;
  color: #a1a1a5;
  word-wrap: break-word;
  padding: 15px 0px;
  margin: 0px;
}
 .js-detail a{
  display: inline-block;
  line-height: 20px;
  text-align: center;
  width: max-content;
  font-size: 13px;
  color: #a1a1a5;
  cursor: pointer;
 }
 .js-tool a{
   cursor: pointer;
   font-size: 12px;
   color: #ccc;
   float: right;
   padding: 0px 10px ;
 }
}
</style>

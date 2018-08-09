<template>
<div class="main-container">
  <h1 class="article-title">{{ articleInfo.title}}</h1>
  <div class="article-main">
    <p v-html="articleInfo.content"></p>
  </div>
  <div class="comment-nologin" v-if="!loginStatus">
    <div class="nologin-tips">
        <button @click="toLogin">登录</button>
        <span>后发表评论</span>
    </div>
  </div>
  <replayList v-if="loginStatus" @sendComment="postComment">
    <div class="user-image" slot="image">
      <img src="" alt="">
    </div>
  </replayList>
  <div class="articleInfo">
    <span class="totalCount">{{ articleComment.length }}条评论</span>
    <div class="sort">
      <a>按时间倒序</a>
      <a>按时间正序</a>
    </div>
  </div>
  <div class="article-comment">
    <commentList
    v-for="(item, index) in articleComment"
    :key="item.comment_id"
    :index="index"
    :commentInfo="item"
    @delComment="delcomment(index, item.comment_id)"
    ></commentList>
  </div>
</div>
</template>
<script>
import { request, allRequest } from '@/utils/response'
import commentList from './commentList'
import replayList from './replayList'
export default {
  data () {
    return {
      articleInfo: {},
      articleComment: [],
      params: this.$route.params
    }
  },
  computed: {
    loginStatus () {
      return this.$store.state.loginStatus
    }
  },
  created () {
    // 获取文章详细信息 返回包含每个请求的数据的数组
    allRequest({method: 'get', url: `/articles/${this.params.id}`}, {method: 'get', url: `/comments?article_id=${this.params.id}`})
      .then((value) => {
        // 处理第一个请求的model处理
        if (value[0].code === -1) {
          alert(value[0].message)
          return false
        } else {
          this.$set(this.articleInfo, 'title', value[0].data.title)
          this.$set(this.articleInfo, 'content', value[0].data.content)
        }
        if (value[1].code === -1) {
          alert(value[1].message)
          return false
        } else {
          this.articleComment = value[1].data
        }
      })
      .catch(error => {
        console.error(error)
      })
  },
  methods: {
    toLogin () {
      this.$router.push('/sign/Login')
    },
    postComment (value) {
      request({
        method: 'post',
        url: '/comments',
        headers: {'Content-Type': 'application/json'},
        data: {
          uid: this.$store.state.userInfo,
          token: this.$store.state.USER_TOKEN,
          content: value,
          article_id: this.params.id
        }
      })
        .then((val) => {
          if (val.code === -1) {
            alert(val.message)
            return false
          } else {
            this.articleComment.push(val.data)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    },
    delcomment (index, id) {
      request({
        url: `/comments/${id}/articles/${this.params.id}/token/${this.$store.state.USER_TOKEN}`,
        method: 'delete',
        header: {'Content-Type': 'application/json'}
      })
        .then((value) => {
          if (value.code === -1) {
            alert(value.message)
            return false
          } else {
            this.articleComment.splice(index, 1)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  components: {
    commentList,
    replayList
  }
}
</script>
<style lang="scss" scoped>
.main-container{
  width: 700px;
  margin: 100px auto 0px;
}
.article-title{
  text-align: left;
}
.article-main{
  text-align: left;
  /deep/ p{
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  margin: 20px 0px;
  font-size: 16px;
  line-height: 1.5;
  color: #000;
  word-break: break-word;
}
}
.nologin-tips{
  margin: 100px 0px;
  height: 100px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsla(0,0%,71%,.2);
  button {
    outline: none;
    width: 100px;
    height: 40px;
    border-radius: 40px;
    background: #006dcc;
    color: #fff;
    border: none;
  }
}
.user-image{
    margin-right: 20px;
    font-size: 0px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid #ccc;
    img {
      width: 100%;
    }
  }
.articleInfo{
  margin: 20px 0px;
  &:after{
    content: '';
    display: block;
    clear: both;
  }
  .totalCount{
    float: left;
    font-size: 20px;
    font-weight: 600;
  }
  .sort{
    float: right;
    a{
      font-size: 12px;
      cursor: pointer;
    }
  }
}
</style>

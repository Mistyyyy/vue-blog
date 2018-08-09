<template>
  <div class="comment-container">
    <div class="comment-header">
      <div class="author-image">
        <img src="" alt="">
      </div>
      <div class="author-info">
        <p class="author-name">{{ commentInfo.author_name }}</p>
        <p class="author-time">{{ commentInfo.create_at }}</p>
      </div>
    </div>
    <div class="comment-body">
      <p v-if="!updateStatus">
        {{ updateContent }}
      </p>
      <div v-if="updateStatus">
        <input type="text" v-model="updateContent"><button @click="saveComment">保存</button>
      </div>
    </div>
    <div class="comment-tool">
      <a>点赞</a>
      <a @click="reply">回复</a>
      <a v-if="userId == commentInfo.user_id" @click="delComment">删除</a>
      <a v-if="userId == commentInfo.user_id" @click="updateComment">修改</a>
    </div>
    <replayList v-if="openReplay" class="active">
      <div class="verticle-line" slot="line">
        <div></div>
      </div>
    </replayList>
  </div>
</template>
<script>
import replayList from './replayList'
import { request } from '@/utils/response'
export default {
  data () {
    return {
      openReplay: false,
      updateStatus: false,
      cancelUpdate: this.commentInfo.content,
      updateContent: this.commentInfo.content
    }
  },
  computed: {
    replyStatus () {
      return this.$store.state.loginStatus
    },
    userId () {
      return this.$store.state.userInfo
    }
  },
  props: ['commentInfo'],
  methods: {
    reply () {
      // 通过新增评论接口把评论添加进数据库 先检查用户的登录状态
      if (!this.replyStatus) {
        this.$router.push('/sign/Login')
      } else {
        this.openReplay = !this.openReplay
      }
    },
    delComment () {
      this.$emit('delComment')
    },
    updateComment () {
      this.updateStatus = !this.updateStatus
      if (!this.updateStatus) {
        this.updateContent = this.cancelUpdate
      }
    },
    saveComment () {
      request({
        method: 'put',
        url: `/comments`,
        header: {'Content-Type': 'application/json'},
        data: {
          uid: this.$store.state.userInfo,
          token: this.$store.state.USER_TOKEN,
          content: this.updateContent,
          article_id: this.$route.params.id,
          comment_id: this.commentInfo.comment_id
        }
      })
        .then((value) => {
          if (value.code === -1) {
            alert(value.message)
            return false
          } else {
            this.updateStatus = !this.updateStatus
            this.cancelUpdate = this.updateContent
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  components: {
    replayList
  }
}
</script>
<style lang="scss" scoped>
.comment-container{
  min-height: 130px;
  padding: 20px 0px;
  border-top: 1px solid #ccc;
  .comment-header{
    display: flex;
    p{
      margin: 0;
    }
    .author-image{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
    .author-info{
      padding: 5px;
      padding-top: 0px;
      text-align: left;
      .author-name{
        font-size: 14px;
        padding-bottom: 5px;
      }
      .author-time{
        font-size: 12px;
      }
    }
  }
  .comment-body{
    padding: 10px 0px;
    font-size: 15px;
    color: #000;
    text-align: left;
    line-height: 1.3;
    padding: 10px 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
    display: flex;
    align-items: center;
    input {
      height: 40px;
      outline: none;
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 13px;
      margin-right: 20px;
    }
    button {
      outline: none;
      width: 60px;
      font-size: 14px;
      height: 40px;
      border: none;
      border-radius: 10px;
      background:rgb(111, 186, 252);
    }
  }
  .comment-tool{
    font-size: 12px;
    cursor: pointer;
    text-align: left;
    a {
      padding-right:10px;
      }
  }
}
.active{
  margin: 20px 0px;
}
.verticle-line{
  // height: 250px;
  width: 42px;
  div{
    width: 2px;
    height: 100%;
    background: #ccc;
  }
}
</style>

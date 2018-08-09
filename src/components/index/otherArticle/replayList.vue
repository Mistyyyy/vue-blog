<template>
  <div class="comment-loginStatus">
    <slot name="image"></slot>
    <slot name="line"></slot>
    <div class="login-tips">
      <div class="user-input">
        <textarea placeholder="请写出你的评论，至少5个字符" v-model="content"></textarea>
      </div>
      <div class="sent-comment">
        <button @click="postComment">发送</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  props: ['commentContent'],
  methods: {
    postComment () {
      if (this.content.length <= 5) {
        alert('字数不够哦')
        return
      }
      this.$emit('sendComment', this.content)
      this.content = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.comment-loginStatus{
  margin: 100px 0px;
  display: flex;
}
.login-tips{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  .user-image{
    font-size: 0px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ccc;
    img {
      width: 100%;
    }
  }
  .user-input{
    width: 99%;
    textarea{
      outline: none;
      width: 100%;
      height: 80px;
      border:1px solid #ccc;
      border-radius: 5px;
      background: hsla(0,0%,71%,.1);
      resize: none;
      font-size: 13px;
    }
  }
  .sent-comment{
    width: 100%;
    display: flex;
    height: 40px;
    justify-content: flex-end;
    align-items: center;
    button {
      width: 100px;
      height: 30px;
      background: #49afcd;
      outline: none;
      border: none;
      border-radius: 5px;
    }
  }
}
</style>

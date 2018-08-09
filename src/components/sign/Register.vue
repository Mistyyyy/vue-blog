<template>
  <form action="">
    <div class="login-container">
        <div class="js-inline">
            <label for="username" class="js-label">用户名</label>
            <input type="text" placeholder="请输入用户名" class="js-input" id="username" v-model="registerInfo.username">
        </div>
        <div class="js-inline">
            <label for="password" class="js-label">密码</label>
            <input type="password" placeholder="请输入密码" class="js-input" id="password" v-model="registerInfo.password">
        </div>
        <div class="js-inline">
            <label for="password" class="js-label">确认
              密码</label>
            <input type="password" placeholder="请再次输入密码" class="js-input" id="password" v-model="repassword">
        </div>
        <div class="js-inline">
            <button class="btn js-btnlogin" @click.prevent="toMainPage">注册</button>
        </div>
        <div class="js-inline">
            <span class="al-others">社交账号登录</span>
        </div>
    </div>
  </form>
</template>
<script>
import { setStorage } from '@/cookie/operateCookie'
import { request } from '@/utils/response'
export default {
  data () {
    return {
      registerInfo: {username: '', password: ''},
      repassword: ''
    }
  },
  methods: {
    toMainPage () {
      if (this.registerInfo.password.trim() === this.repassword.trim() && this.repassword) {
        request({
          method: 'post',
          url: '/register',
          headers: {'Content-Type': 'application/json'},
          data: {
            username: this.registerInfo.username,
            password: this.registerInfo.password
          }
        })
          .then((value) => {
            if (value.code === -1) {
              alert(value.message)
              return false
            }
            this.$store.commit('changeStatus')
            this.$store.commit('SET_TOKEN', value.data.token)
            this.$store.commit('saveUserInfo', value.data.uid)
            setStorage('userToken', value.data.token)
            setStorage('uid', value.data.uid)
            this.$router.push({
              path: '/index'
            })
          })
          .catch((error) => {
            console.error(error)
          })
      } else {
        alert('密码输入不一致，请重新输入')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.js-inline{
  padding: 10px 60px;
  overflow: hidden;
  font-size: 14px;
}
.js-label{
  width: 60px;
  line-height: 1.3;
  display: inline-block;
  text-align: left;
}
.js-input{
  outline: none;
  width: 200px;
  border-radius: 5px;
  border:1px;
  border-style: solid;
  border-color: #ccc;
  height: 20px;
}
.js-checkbox{
  margin-left: 7px;
  margin-top: 7px;
}
.js-problem{
  font-size: 15px;
  color: #999;
}
.js-btnlogin{
  width: 90%;
  font-size: 18px;
  line-height: 30px;
  border: none;
  border-radius:30px;
  background: #3194d0;
  color: #fff;
  font-weight: 600;
  outline: none;
  cursor: pointer;
}
.al-others{
  font-size: 12px;
  color: #b5b5b5;
  display: inline-block;
  margin: 20px 0px 10px;
}
.al-others::before,.al-others::after{
  content: "";
  display: inline-block;
  height: 1px;
  width: 50px;
  background: #969696;
  margin: 0px 10px;
  vertical-align: middle;
}
</style>

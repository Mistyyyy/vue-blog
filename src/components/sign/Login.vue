<template>
  <form action="">
    <div class="login-container">
        <div class="js-inline">
            <label for="username" class="js-label">用户名</label>
            <input type="text" placeholder="请输入用户名" class="js-input" id="username" v-model="userInfo.username">
        </div>
        <div class="js-inline">
            <label for="password" class="js-label">密码</label>
            <input type="password" placeholder="请输入密码" class="js-input" id="password" v-model="userInfo.password">
        </div>
        <div class="js-inline">
            <input type="checkbox" id="remember" class="js-fl js-checkbox">
            <label for="remember" class="js-fl">记住我</label>
            <a class="js-fr js-problem">登录遇到问题？</a>
        </div>
        <div class="js-inline">
            <button class="btn js-btnlogin" @click.prevent="toMainPage">登录</button>
        </div>
        <div class="js-inline">
            <span class="al-others">社交账号登录</span>
        </div>
    </div>
  </form>
</template>
<script>
import {setStorage, delStorage, getStorage} from '@/cookie/operateCookie'
import { request } from '@/utils/response'
export default {
  data () {
    return {
      userInfo: {username: '', password: ''}
    }
  },
  computed: {
    aimPath () {
      if (getStorage('toLoginPagePath') === '/sign/Register') {
        return '/index'
      } else {
        return getStorage('toLoginPagePath')
      }
    }
  },
  methods: {
    toMainPage () {
      request({
        method: 'post',
        url: '/login',
        data: {
          username: this.userInfo.username,
          password: this.userInfo.password
        },
        headers: {'Content-Type': 'application/json'}
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
            path: this.aimPath
          })
          delStorage('toLoginPagePath')
        })
        .catch((value) => {
          console.error(value)
        })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(() => {
      setStorage('toLoginPagePath', from.path)
    })
  }
}
</script>
<style lang="scss" scoped>
.js-fl{
  float: left;
}
.js-fr{
  float: right;
}
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

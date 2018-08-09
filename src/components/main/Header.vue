<template>
  <header class="js-header">
      <div class="js-header-container">
          <a href="" class="js-logo">
            <img src="@/assets/nav-log.png" alt="">
          </a>
          <div class="al-inline al-nav">
            <router-link class="link" to="/index" v-if='loginStatus'>
              发现
            </router-link>
            <a class="link" v-if='loginStatus'>
              关注
            </a>
            <a class="link" v-if='loginStatus'>
              消息
            </a>
            <router-link class="link" to="/index" v-if='!loginStatus'>
              首页
            </router-link>
            <router-link class="link" to="/download" v-if='!loginStatus'>
              下载APP
            </router-link>
            <div class="al-inline al-container-input">
              <input type="text" placeholder="搜索" v-model="searchString">
            </div>
          </div>
          <div class="al-inline">
            <a class="link">
              Aa
            </a>
            <a class="link write" v-if='loginStatus' @click="loginOut">
              退出
            </a>
            <a class="link" v-if='!loginStatus' @click='toLogin'>
              登录
            </a>
            <a class="link register" v-if='!loginStatus' @click='toRegister'>
              注册
            </a>
            <a class="link write" @click="writeArticle">
              写文章
            </a>
          </div>
      </div>
  </header>
</template>
<script>
import { delStorage } from '@/cookie/operateCookie'
import { request } from '@/utils/response'
export default {
  name: 'headerNav',
  data () {
    return {
      searchString: ''
    }
  },
  computed: {
    loginStatus () {
      return this.$store.state.loginStatus
    }
  },
  methods: {
    toLogin () {
      this.$router.push({
        path: '/sign/Login'
      })
    },
    toRegister () {
      this.$router.push({
        path: '/sign/Register'
      })
    },
    writeArticle () {
      if (this.loginStatus) {
        this.$router.push({
          path: '/writeArticle'
        })
      } else {
        this.$router.push({
          path: '/sign/Login'
        })
      }
    },
    loginOut () {
      request({
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        url: '/logout',
        data: {
          'token': this.$store.state.USER_TOKEN
        }
      })
        .then((value) => {
          if (value.code === -1) {
            alert(value.message)
            return false
          } else {
            delStorage('userToken')
            delStorage('uid')
            this.$store.commit('SET_TOKEN', '')
            this.$store.commit('saveUserInfo', '')
            this.$store.commit('changeStatus')
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  created () {
  }
}
</script>
<style scoped>
a{
  text-decoration: none;
}
.js-header{
  height: 56px;
  position: fixed;
  top:0;
  width: 100%;
  border:1px solid #ccc;
  background: #fff;
}
.js-header-container{
  max-width: 1440px;
  margin: 0px auto;
}
.js-logo{
  display: inline-block;
  height: 56px;
  font-size: 0;
  margin-right: 80px;
}
.js-logo img{
  height: 100%;
}
.link{
  line-height: 56px;
  width: 100px;
  vertical-align: top;
  text-align: center;
  display: inline-block;
  color: #333;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
}
.al-container-input{
  padding: 0px 30px;
}
.al-inline{
  display: inline-block;
  vertical-align: top;
  line-height: 56px;
}
.al-nav{
  width: 800px;
}
.al-inline input{
  height: 30px;
  border-radius: 50px;
  padding: 0px 10px;
  width: 200px;
  border: 1px solid #eee;
  background: #eee;
  outline: none;
}
.register,.write{
  color: #ea6f5a;
}
</style>

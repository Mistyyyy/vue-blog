<template>
    <div class="sign">
        <div class="js-logo">
            <img src="@/assets/nav-log.png" alt="">
        </div>
        <div class="js-login">
            <h4 class="login-title">
              <router-link to="/sign/Login">登录</router-link>
              <b>.</b>
              <router-link to="/sign/Register">注册</router-link>
            </h4>
            <router-view/>
        </div>
    </div>
</template>
<script>
export default {
  name: 'LoginOrRegister',
  data () {
    return {
      username: '',
      password: '',
      name: ''
    }
  }
}
</script>
<style scoped>
a{
  cursor: pointer;
  text-decoration: none;
  color:#969696
}
.sign{
  height: 100%;
  position: relative;
  text-align: center;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  box-shadow:0 0 8px rgba(0,0,0,.1)
}
.js-logo{
  display: inline-block;
  position: absolute;
  top: 50px;
  left: 30px;
}
.js-login{
  width: 400px;
  margin: 0px auto;
  padding: 0px 0px 30px;
  display:inline-block;
  background: #fff;
  border-radius: 10px;
  color: #969696;
}
.login-title{
  height: 50px;
}
.login-title a{
  font-size: 20px;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
}
.login-title b{
  display: inline-block;
  vertical-align: super;
}
.login-title a:hover{
  color: #ea6f5a;
  border-bottom: 2px solid #ea6f5a;
}
.router-link-active{
  color: #ea6f5a;
  border-bottom: 2px solid #ea6f5a;
}
</style>

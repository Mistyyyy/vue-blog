import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import LoginOrRegister from '@/components/sign/LoginOrRegister'
import index from '@/components/index/index'
import download from '@/components/download/download'
import login from '@/components/sign/Login'
import Register from '@/components/sign/Register'
import fullArticle from '@/components/index/otherArticle/fullArticle'
import writeArticle from '@/components/index/otherArticle/writeArticle'
import updateArticle from '@/components/index/otherArticle/updateArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      redirect: 'index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: index
        },
        {
          path: 'p/:id',
          name: 'p',
          component: fullArticle
        },
        {
          path: 'download',
          name: 'download',
          component: download
        },
        {
          path: 'writeArticle',
          name: 'writeArticle',
          component: writeArticle
        },
        {
          path: 'updateArticle',
          name: 'updateArticle',
          component: updateArticle
        }
      ]
    },
    {
      path: '/sign',
      name: 'sign',
      redirect: '/Login',
      component: LoginOrRegister,
      children: [
        {
          path: 'Login',
          name: 'Login',
          component: login
        },
        {
          path: 'Register',
          name: 'Register',
          component: Register
        }
      ]
    },
    {
      path: '/RegisterIn',
      name: 'RegisterIn',
      component: LoginOrRegister
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

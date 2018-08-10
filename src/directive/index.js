import Vue from 'vue'
// 自定义指令，用于表单验证
Vue.directive('checkParmas', {
  inserted (el, binding, vNode) {
    el.addEventListener('input', (e) => {
      if (e.target.value.length <= 8) {
        el.style.background = 'red'
      } else {
        el.style.background = 'white'
      }
    })
  }
})
Vue.directive('checkPassword', {
  inserted (el, binding, vNode) {
    el.addEventListener('input', (e) => {
      if (e.target.value.length <= 8) {
        el.style.background = 'red'
      } else {
        el.style.background = 'white'
      }
    })
  }
})
Vue.directive('checkEqual', {
  update (el, binding, vNode) {
    el.addEventListener('input', (e) => {
      if (e.target.value.length <= 8) {
        el.style.background = 'red'
      } else {
        el.style.background = 'white'
        if (e.target.value !== binding.value) {
          el.style.background = 'yellow'
        } else {
          el.style.background = 'white'
        }
      }
    })
  }
})

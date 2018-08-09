<template>
  <div class="hello">
    <headerNav></headerNav>
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
import headerNav from '@/components/main/Header'
export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isRouterAlive: true
    }
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  },
  components: {
    headerNav
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body,html{
  margin: 0;
  padding: 0;
}
.hello{
  height: 100%;
}
</style>

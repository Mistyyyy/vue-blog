<template>
<div class="js-body">
  <div class="js-left">
    <lunbo></lunbo>
    <listTitle></listTitle>
    <showArticle></showArticle>
  </div>
  <div class="js-right">
    <div>
        <linkButton
        v-for=" item in contentArray"
        :key="item.cid"
        :class="item.style"
        >
        {{ item.text }}
        </linkButton>
    </div>
  </div>
</div>
</template>
<script>
import lunbo from './lunbo'
import linkButton from './linkButton'
import listTitle from './listTitle/listTitle'
import showArticle from './otherArticle/article'
export default {
  name: 'index',
  data () {
    return {
      contentArray: [
        {text: '7日热门', cid: 1, style: 'btn-light'},
        {text: '30日热门', cid: 2, style: 'btn-green'},
        {text: '优选连载', cid: 3, style: 'btn-warm'},
        {text: '简书版权', cid: 4, style: 'btn-normal'},
        {text: '简书大学堂', cid: 5, style: 'btn-special'}
      ]
    }
  },
  components: {
    lunbo,
    linkButton,
    listTitle,
    showArticle
  },
  created () {
  }
}
</script>
<style  rel="stylesheet/scss" lang="scss" scoped>
.js-body{
  width: 1000px;
  margin: 0px auto;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  .js-left{
    width: 65%;
  }
  .js-right{
    width: 30%;
  }
}
.btn-light{
  background: #faa732 !important;
  color: #fff;
}
.btn-green{
  background: #5bb75b !important;
  color: #fff;
}
.btn-warm{
  background: #da4f49 !important;
  color:#fff;
}
.btn-normal{
  background: #006dcc !important;
  color: #fff;
}
.btn-special{
  background: #49afcd !important;
  color: #fff;
}
</style>

<template>
  <div>
    <articleList
    v-for = "article in articles"
    :key = "article.id"
    :article = "article"
    ></articleList>
  </div>
</template>
<script>
import articleList from './articleList'
import { request } from '@/utils/response'
export default {
  name: 'showArticle',
  data () {
    return {
      articles: []
    }
  },
  created () {
    // 获取文章列表 包含 文章的详细信息
    request({
      method: 'get',
      url: `/articles/page_id/1/page_limit/10`
    })
      .then((value) => {
        if (value.code === -1) {
          alert(value.message)
          return false
        } else {
          this.articles = value.data
        }
      })
      .catch((error) => {
        console.error(error)
      })
  },
  components: {
    articleList
  }
}
</script>
<style lang="scss" scoped>

</style>

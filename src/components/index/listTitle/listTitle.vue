<template>
  <div class="js-container">
    <listButton
    :key = "item.cid"
    v-for = "item in dataList"
    :imagePath = "item.image"
    >
      {{ item.text }}
    </listButton>
    <a class="js-titlemore">更多热门专题 ></a>
  </div>
</template>
<script>
import listButton from './listButton'
export default {
  name: 'listTitle',
  data () {
    return {
      dataList: [
        {image: require('@/assets/1.jpg'), text: '历史', cid: 1},
        {image: require('@/assets/2.jpg'), text: 'IT互联网', cid: 2},
        {image: require('@/assets/3.jpg'), text: '人文社科', cid: 3},
        {image: require('@/assets/4.jpg'), text: '摄影', cid: 4},
        {image: require('@/assets/5.jpg'), text: '简书电影', cid: 5},
        {image: require('@/assets/6.jpg'), text: '读书', cid: 6},
        {image: require('@/assets/7.jpg'), text: '故事', cid: 7}
      ]
    }
  },
  components: {
    listButton
  }
}
</script>
<style lang="scss" scoped>
a{
  text-decoration: none;
}
.js-container {
  min-height: 60px;
  text-align: left;
  margin-top: 20px;
}
.js-titlemore{
  font-size: 14px;
  cursor: pointer;
}
</style>

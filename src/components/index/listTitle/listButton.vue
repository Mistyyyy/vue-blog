<template>
<div class="js-title-container">
  <a>
    <div class="js-img-caontaine">
      <img :src="iamge" alt="" class="js-img">
    </div>
    <div class="js-titleDesc">
        <slot></slot>
    </div>
  </a>
</div>
</template>
<script>
export default {
  name: 'listButton',
  data () {
    return {
      iamge: this.$props.imagePath
    }
  },
  props: ['imagePath'],
  created () {
  }
}
</script>
<style lang="scss" scoped>
.js-title-container{
  display: inline-block;
  height: 40px;
  min-width: 70px;
  margin: 5px 20px;
  cursor: pointer;
  .js-img-caontaine{
    display: inline-block;
    vertical-align: middle;
    font-size: 0;
  }
  .js-img{
    height: 30px;
    min-width: 30px;
  }
  a{
    display: inline-block;
  }
  .js-titleDesc{
    display: inline-block;
    line-height: 32px;
    font-size: 14px;
    color: black;
    padding: 0px 10px 0px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
}
</style>

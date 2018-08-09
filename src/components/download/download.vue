<template>
<div class="js-body">
  <div class="js-left">
      this is left for download
  </div>
  <div class="js-right">
      this is right for download
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style  rel="stylesheet/scss" lang="scss" scoped>
.js-body{
  width: 1000px;
  margin: 0px auto;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  .js-left{
    flex: 1;
    width: 65%;
  }
  .js-right{
    float: 1;
    width: 30%;
  }
}
</style>

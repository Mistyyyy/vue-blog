<template>
  <button class="btn">
      <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'linkButton',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.btn {
  width: 100%;
  line-height: 30px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding-left: 40px;
  font-size: 18px;
  text-align: left;
  background: #0cb474;
  margin-bottom: 30px;
  cursor: pointer;
}
</style>

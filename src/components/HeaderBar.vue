<template>
  <div>
    <header>
      <span>{{title}}</span>
      <div class="menu">
        <i class="iconfont icon-menu"></i>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss" scoped>
header {
  height: 50.5px;
  background-color: #e54847;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 18px;
  .menu {
    width: 40px;
    height: 100%;
    position: absolute;
    right: 5px;
    top: 0;
    i {
      font-size: 24px;
      line-height: 24px;
      display: block;
      margin-top: 14px;
    }
  }
}
</style>
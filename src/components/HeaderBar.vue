<template>
  <div>
    <header>
      <span>{{title}}</span>
      <i class="iconfont icon-menu" @click.stop="SET_ISSHOWMENU(!isShowMenu)"></i>
      <ul class="menu-list" v-if="isShowMenu">
        <li>首页</li>
        <li>电影</li>
        <li>影院</li>
        <li>榜单</li>
        <li>热点</li>
        <li>商城</li>
      </ul>
    </header>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["title"],
  computed: {
    ...mapState(["isShowMenu"])
  },
  methods: {
    ...mapMutations(["SET_ISSHOWMENU"])
  }
};
</script>

<style lang="scss" scoped>
@import "assets/mixin.scss";
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
  .icon-menu {
    display: block;
    width: 40px;
    height: 100%;
    position: absolute;
    right: 5px;
    top: 0;
    font-size: 24px;
    line-height: 24px;
    display: block;
    margin-top: 14px;
  }
  .menu-list {
    width: 110px;
    position: absolute;
    top: 44px;
    right: 10px;
    z-index: 2;
    background-color: #fff;
    box-shadow: 2px 2px 12px #ccc;
    li {
      height: 45px;
      line-height: 45px;
      text-align: center;
      color: #333;
      font-size: 15px;
      &:not(:last-child) {
        @include border_1px(#f0f0f0, bottom);
      }
    }
  }
}
</style>
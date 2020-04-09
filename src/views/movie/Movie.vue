<template>
  <div class="movie-container">
    <div class="topbar">
      <router-link to="/citylist">
        <span>北京</span>
        <i class="iconfont icon-down"></i>
      </router-link>
      <router-link to="/index/movie/hotshowing" active-class="topbar-active" tag="span">正在热映</router-link>
      <router-link to="/index/movie/commingsoon" active-class="topbar-active" tag="span">即将上映</router-link>
      <router-link to="/search" tag="i" class="iconfont icon-sousuo"></router-link>
    </div>

    <router-view class="movie-main"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "assets/mixin.scss";

.movie-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  .topbar {
    height: 44px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 5px;
    @include border_1px(#e6e6e6, bottom);
    .icon-sousuo {
      font-size: 24px;
      font-weight: bold;
      color: #ed443f;
      display: block;
      width: 40px;
      line-height: 44px;
      text-align: center;
    }
    & > :not(.icon-sousuo) {
      flex: 1;
      font-size: 15px;
      color: #787878;
      line-height: 44px;
      position: relative;
    }
    & > .topbar-active::after {
      content: "";
      display: block;
      height: 2px;
      width: 100%;
      background-color: #ed443f;
      position: absolute;
      transform: translateY(-50%);
    }
  }
  .movie-main {
    flex: 1;
  }
}
</style>
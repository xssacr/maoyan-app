<template>
  <div class="container" @click="SET_ISSHOWMENU(false)">
    <HeaderBar title="猫眼电影" />
    <main>
      <DownloadAppAd />
      <router-view></router-view>
    </main>
    <ul class="footer">
      <router-link to="/index/movie" tag="li" active-class="active">
        <i class="iconfont icon-dianying"></i>
        <span>电影</span>
      </router-link>
      <router-link to="/index/cinema" tag="li" active-class="active">
        <i class="iconfont icon-yingyuan"></i>
        <span>影院</span>
      </router-link>
      <router-link to="/index/profile" tag="li" active-class="active">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import HeaderBar from "../components/HeaderBar";
import DownloadAppAd from "../components/DownloadAppAd";
export default {
  components: {
    HeaderBar,
    DownloadAppAd
  },
  methods: {
    ...mapMutations(["SET_ISSHOWMENU"])
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/mixin.scss";
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .footer {
    line-height: 48px;
    display: flex;
    @include border_1px(#d8d8d8, top);
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      i {
        font-size: 24px;
        line-height: 28px;
        color: #696969;
      }
      span {
        font-size: 12px;
        line-height: 20px;
        color: #939393;
      }
      &.active {
        i,
        span {
          color: #ee3f3e;
        }
      }
    }
  }
}
</style>
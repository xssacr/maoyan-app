<template>
  <div class="ad-container">
    <img src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png" alt="logo" />
    <div>
      <h1>猫眼</h1>
      <p>在线选座，热门影讯，爱上看电影</p>
    </div>
    <button>立即打开</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "assets/mixin.scss";
.ad-container {
  height: 64px;
  @include border_1px(#e6e6e6, bottom);
  img {
    position: absolute;
    left: 15px;
    top: 11px;
    width: 44px;
    height: 44px;
  }
  div {
    position: absolute;
    left: 70px;
    top: 13px;
    h1 {
      font-size: 17px;
      color: #222;
      line-height: 23px;
    }
    p {
      font-size: 12px;
      color: #999;
    }
  }
  button {
    position: absolute;
    border: 0;
    outline: 0;
    right: 15px;
    top: 17px;
    width: 68px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #ef4238;
    border-radius: 3px;
    font-size: 13px;
    color: #fff;
  }
}
</style>
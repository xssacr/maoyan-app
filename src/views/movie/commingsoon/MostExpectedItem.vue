<template>
  <div class="most-exp-content">
    <div class="img-con">
      <img :src="mostexp.img | replaceImgWH" alt />
      <i class="iconfont icon-love"></i>
      <p class="watch">{{mostexp.wish}}人想看</p>
    </div>
    <p class="name">{{mostexp.nm}}</p>
    <span class="date">{{mostexp.comingTitle | comingTitleFilter}}</span>
  </div>
</template>

<script>
export default {
  props: ["mostexp"],
  filters: {
    comingTitleFilter(value) {
      return value.split(" ")[0];
    },
    replaceImgWH(value) {
      return value.replace(/w.h/, "85.115");
    }
  }
};
</script>

<style lang="scss" scoped>
.most-exp-content {
  width: 85px;
  height: 158px;
  margin-right: 15px;
  .img-con {
    width: 85px;
    height: 115px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .icon-love {
      display: block;
      width: 28px;
      height: 28px;
      font-size: 12px;
      color: #cbceca;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
      text-align: center;
      line-height: 28px;
      border-bottom-right-radius: 40%;
    }
    .watch {
      width: 100%;
      height: 35px;
      line-height: 52px;
      text-align: center;
      position: absolute;
      font-size: 12px;
      bottom: 0;
      background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
      color: #faaf00;
    }
  }
  .name {
    font-size: 13px;
    color: #222;
    margin-bottom: 3px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: bold;
  }
  .date {
    font-size: 12px;
    color: #999;
  }
}
</style>
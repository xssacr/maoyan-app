<template>
  <div class="item-con">
    <img :src="data.img | replaceImgWH" alt />
    <div class="info">
      <h2>{{data.nm}}</h2>
      <p class="dp" v-if="data.sc">
        观众评
        <span>{{data.sc}}</span>
      </p>
      <p class="dp" v-else>
        <span>{{data.wish}}</span>人想看
      </p>
      <p class="zy">主演:{{data.star}}</p>
      <p v-if="data.comingTitle">{{data.comingTitle}}</p>
      <p v-else>{{data.showInfo}}</p>
    </div>
    <button class="btn-red" v-if="data.globalReleased">购票</button>
    <button v-else class="btn-blue">预售</button>
  </div>
</template>

<script>
export default {
  props: ["data"],
  filters: {
    replaceImgWH(value) {
      return value.replace(/w.h/, "64.90");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/mixin.scss";
.item-con {
  height: 95px;
  display: flex;
  padding: 12px 15px;
  @include border_1px(#ccc, bottom);
  img{
    width: 64px;
    height: 90px;
  }
  .info {
    width: 206px;
    padding: 0 10px;
    h2 {
      font-size: 17px;
      color: #333;
      line-height: 30px;
    }
    .dp {
      span {
        font-size: 15px;
        color: #faaf00;
      }
    }

    p {
      font-size: 13px;
      line-height: 22px;
      color: #666;
    }

    .zy {
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      white-space: nowrap;
    }
  }
  button {
    text-align: center;
    color: white;
    width: 46.98px;
    height: 27px;
    border: 0;
    border-radius: 5px;
    font-size: 13px;
    align-self: center;
    outline: none;
  }
  .btn-red {
    background: #f03d37;
  }
  .btn-blue {
    background-color: #42a1e4;
  }
}
</style>
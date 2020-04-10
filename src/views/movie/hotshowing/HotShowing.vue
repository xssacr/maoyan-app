<template>
  <div class="wrapper" ref="scroll-wrap">
    <div>
      <HotShowItem v-for="item in datas" :key="item.id" :data="item"></HotShowItem> 
    </div>
  </div>
</template>

<script>
import { getHotShowing } from "api/movie";
import { Indicator } from "mint-ui";
import HotShowItem from "../hotshowing/HotShowItem";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);
export default {
  data() {
    return {
      datas: []
    };
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs["scroll-wrap"], {
        scrollY: true,
        probeType: 3,
        pullUpLoad: true
      });
    }
  },
  components: {
    HotShowItem
  },
  async created() {
    Indicator.open();
    let rs = await getHotShowing();
    this.datas = rs.data;

    // 保证 dom 已经生成，数据已经渲染完成了
    this.$nextTick(() => {
      this.initScroll();
      Indicator.close();
    });
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 80%;
  overflow: hidden;
  div{
    :last-child::before{
      display: none;
    }
  }
}
</style>
<template>
  <div class="wrapper" ref="scroll-wrap">
    <div>
      <HotShowItem v-for="item in datas" :key="item.id" :data="item"></HotShowItem>
    </div>
  </div>
</template>

<script>
import { getHotShowing } from "api/movie";
import { Indicator, Toast } from "mint-ui";
import { mapMutations } from "vuex";
import HotShowItem from "../hotshowing/HotShowItem";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);
export default {
  data() {
    return {
      datas: [],
      start: 0,
      limit: 5,
      isEnd: false // 是否到达底部
    };
  },
  methods: {
    ...mapMutations(["SET_ISSHOWAD"]),
    initScroll() {
      // 判断 scroll 是否存在，如果存在，说明不是第一次加载
      if (this.scroll) {
        this.scroll.refresh(); // 刷新 bsroll
        return;
      }
      this.scroll = new BScroll(this.$refs["scroll-wrap"], {
        scrollY: true,
        probeType: 3,
        pullUpLoad: true
      });

      // 广告的显示和隐藏
      this.scroll.on("scroll", position => {
        if (position.y < -50) {
          this.SET_ISSHOWAD(false);
        } else {
          this.SET_ISSHOWAD(true);
        }
      });

      //绑定上拉监听事件
      this.scroll.on("pullingUp", () => this.getHotShowingList());
    },
    async getHotShowingList() {
      if (this.isEnd) {
        Toast("没有更多数据了");
        this.scroll.finishPullUp();
        return;
      }
      let rs = await getHotShowing({ _start: this.start, _limit: this.limit });
      if (rs.data.length < this.limit) {
        // 数据不够一页，说明到达了底部
        this.isEnd = true;
      }

      // 判断是否第一次加载
      if (this.start === 0) {
        this.datas = rs.data;
      } else {
        // 如果不是第一次加载就追加
        this.datas.push(...rs.data);
      }

      Indicator.open();
      // 保证 dom 已经生成，数据已经渲染完成了
      this.$nextTick(() => {
        Indicator.close();
        this.initScroll();
        this.scroll.finishPullUp();
        this.start += this.limit;
      });
    }
  },
  components: {
    HotShowItem
  },
  async created() {
    this.getHotShowingList();
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  div {
    :last-child::before {
      display: none;
    }
  }
}
</style>
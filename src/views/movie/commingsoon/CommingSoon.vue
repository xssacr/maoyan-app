<template>
  <div>
    <!-- 最受期待的 -->
    <div class="most-expected">
      <p class="title">近期最受期待</p>
      <div class="most-wrapper">
        <div class="most-con">
          <MostExpectedItem v-for="item in datasite.comming" :key="item.id" :mostexp="item" />
        </div>
      </div>
    </div>

    <!-- 即将上映列表 -->
    <div></div>
  </div>
</template>

<script>
import MostExpectedItem from "../commingsoon/MostExpectedItem";
import { Indicator, Toast } from "mint-ui";
import { getMostExpected } from "@/api/movie.js";
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      datasite: {
        comming: []
      },
      start: 0,
      limit: 5,
      isEnd: false
    };
  },
  methods: {
    initScrollX() {
      if (this.scrollX) {
        this.scrollX.refresh();
        return;
      }
      this.scrollX = new BScroll(".most-wrapper", {
        probeType: 3,
        scrollX: true
      });

      this.scrollX.on("scrollEnd", position => {
        if (this.scrollX.maxScrollX === position.x) {
          // 到最后了,要加载下一页数据
          this.getData();
        }
      });
    },
    async getData() {
      if (this.isEnd) {
        Toast("没有更多的数据了");
        return;
      }

      Indicator.open();
      let rs = await getMostExpected({
        _start: this.start,
        _limit: this.limit
      });

      if (rs.data.length < this.limit) {
        this.isEnd = true;
      }

      // 如果是第一次加载
      if (this.start === 0) {
        this.datasite.comming = rs.data;
      } else {
        this.datasite.comming.push(...rs.data);
      }

      this.$nextTick(() => {
        Indicator.close();
        this.initScrollX();
        this.start += this.limit;
      });
    }
  },
  components: {
    MostExpectedItem
  },
  async created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.most-expected {
  height: 200px;
  padding: 10px 15px;
  .most-wrapper {
    overflow: hidden;
    height: 158px;
    .most-con {
      display: inline-flex;
    }
  }

  .title {
    margin: 0;
    font-size: 14px;
    color: #333;
    margin-bottom: 12px;
  }
}
</style>
<template>
  <div class="hotshowing-container">
    <HotShowItem v-for="item in datas" :key="item.id" :data="item"></HotShowItem>
  </div>
</template>

<script>
import { getHotShowing } from "api/movie";
import HotShowItem from "../hotshowing/HotShowItem";
export default {
  data() {
    return {
      datas: []
    };
  },
  components: {
    HotShowItem
  },
  async created() {
    let rs = await getHotShowing();
    this.datas = rs.data;
  }
};
</script>

<style lang="scss" scoped>

</style>
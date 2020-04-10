import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否显示右上角 menu
    isShowMenu: false,
    // 是否显示下载 App 广告
    isShowAd: true
  },
  mutations: {
    SET_ISSHOWMENU(state, status) {
      state.isShowMenu = status;
    },
    SET_ISSHOWAD(state, status) {
      state.isShowAd = status;
    }
  },
  actions: {
  },
  modules: {
  }
})

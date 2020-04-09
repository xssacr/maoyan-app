import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否显示右上角 menu
    isShowMenu: false
  },
  mutations: {
    SET_ISSHOWMENU(state, status) {
      state.isShowMenu = status;
    }
  },
  actions: {
  },
  modules: {
  }
})

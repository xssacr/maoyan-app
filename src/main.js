import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/reset.scss'
import '@/assets/common.scss'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

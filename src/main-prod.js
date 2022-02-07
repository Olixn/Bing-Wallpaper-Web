import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/global.css"
import animated from 'animate.css'
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element'

import axios from 'axios'
axios.defaults.baseURL = 'http://bing.gocos.cn/api/v1'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(animated)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8081'; //设置一个类似base_url的请求路径
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.axios = axios

Vue.use(ElementUI);
Vue.config.productionTip = false //vue 配置的时候要不要产品说明书

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
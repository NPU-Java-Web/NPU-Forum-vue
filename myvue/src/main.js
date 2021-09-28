// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
//导入全局样式
import './assets/CSS/global.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(router);
Vue.use(ElementUI);
//配置请求根路径
//axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
//可使用$http
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

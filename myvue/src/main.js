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
import {drag} from './assets/JS/welcome'

//Vue.prototype.$drag = drag
//配置请求的根路径
axios.defaults.baseURL = '/api'  //关键代码
Vue.config.productionTip = false
Vue.use(router);
Vue.use(ElementUI);
Vue.use(axios)
Vue.prototype.$axios = axios;
Vue.prototype.$store = store;

// 首先对拦截器的请求进行设置，并在方法中return config，此处为固定格式
axios.interceptors.request.use(config => {
  // 表示在配置中的设置头消息的字段Authorization为从本地获取的token值
  config.headers.token = window.localStorage.getItem('token')
  return config
})

//可使用$http
//Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,

  render: h => h(App)
});

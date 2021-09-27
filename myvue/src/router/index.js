import Vue from "vue";
import Router from "vue-router";

import Login from "../components/Login";
import Index from '../components/Index'
import welcome from "../components/welcome";
import user from "../components/user";
import {use} from "element-ui";
Vue.use(Router);


export default new Router({
  routes:[

    {
      //这里的Login是上面import的的Login

      path:'/login',
      component:Login
    },
    //全局跳转到登录页
    //先登录，不然进不去主页面
    {
      path:'/',
      redirect:"/login"
    },
    //在主页面实现基本功能
    //路由跳转就是匹配此处的path规则，匹配到就使用path对应的组件，渲染到进行中的route-view处
    {
      path:'/index',
      component:Index,
      redirect:'/welcome',
      children:[
        {path:'/welcome',
          component:welcome
        },
        {
          path:'/user',
          component:user

        }
      ]
    }
  ]
});

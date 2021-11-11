import Vue from "vue";
import Router from "vue-router";

import Login from "../components/Login";
import Index from '../components/Index'
import welcome from "../components/welcome";
import user from "../components/user";
import {use} from "element-ui";
import {drag} from '../assets/JS/welcome'
import show01 from "../components/show01";
import show02 from "../components/show02";
import show00 from "../components/show00";
import show03 from "../components/show03";
import show04 from "../components/show04";
import releasepost from "../components/releasepost";
import homepageone from "../components/homepageone";
import posts from "../components/posts";
import personal from "../components/personal";
import userProfile from "../components/userProfile";
Vue.use(Router);


export default new Router({
  routes:[

    {
      //这里的Login是上面import的的Login
      name:'login',
      path:'/login',
      component:Login
    },
    //全局跳转到登录页
    //先登录，不然进不去主页面
    {
      path:'/',
      redirect:"/index"
    },
    //在主页面实现基本功能
    //路由跳转就是匹配此处的path规则，匹配到就使用path对应的组件，渲染到进行中的route-view处
    {
      name:'index',
      path:'/index',
      component:Index,
      redirect:'/welcome',
      children:[
        {
          name:"welcome",
          path:'/welcome',
          component:welcome
        },
        {
          name:'user',
          path:'/user',
          component:user
        },
        {
          name:'releasepost',
          path:'/releasepost',
          component:releasepost
        },
        {
          name:'homepageone',
          path:'/homepageone',
          component:homepageone
        },
        {
          name:'posts',
          path:'/posts/:postsId',
          component:posts
        },
        {
          name:'personal',
          path:'/personal/:id',
          component:personal
        },
        {
          name:'userProfile',
          path:'/userprofile',
          component:userProfile
        }
      ]
    },
    {
      name:'show00',
      path:'/show00',
      component:show00
    },
    {
      name:'show01',
      path:'/show01',
      component:show01
    },
    {
      name:'show02',
      path:'/show02',
      component:show02
    },
    {
      name:'show03',
      path:'/show03',
      component:show03
    },
    {
      name:'show04',
      path:'/show04',
      component:show04
    }
  ]
});

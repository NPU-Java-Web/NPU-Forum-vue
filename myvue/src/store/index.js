import Vue from "vue"
import Vuex from "Vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  //存放静态变量
  state:{
    localid:'',
    localNickname:'',

    token:'',

    homepageClass:[
      {
        home: '分区一',
        typeId: 1
      },
      {
        home: '测试分区二',
        typeId: 2
      },
      {
        home: '测试分区三',
        typeId: 3
      }
    ],
    homepageClassNumber:'2',

  },

  //输入静态变量的方法
  mutations:{
    saveLocalid(state,localid) {
      this.state.localid = localid;
    },
    //
    // saveToken(state,token){
    //   window.localStorage.setItem('token',JSON.stringify(token));
    //   this.state.token=token;
    // },
    saveNickname(state,localNickname)
    {
      this.state.localNickname=localNickname;
    },

    saveToken(state,token){
      window.localStorage.setItem('token',JSON.stringify(token));
      this.state.token=token;
    },
    deleteToken(state){
      window.localStorage.removeItem('token');
      this.state.token='';
    }

  }

})


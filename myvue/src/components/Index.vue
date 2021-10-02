<template>

  <el-container class="home-contaner">
<!--    //头部-->
    <el-header>
      <div>
        <img src="../assets/NPU下载.png" alt="">
        <span style="font-size: 20px" >NPU论坛</span>
      </div>
      <div>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#102f6d"
          text-color="#fff"
          active-text-color="#ffd04b"
        :router="true">
          <el-menu-item index="welcome">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">帖子</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="user" >个人信息</el-menu-item>
        </el-menu>
      </div>
<!--      点击登录则跳转到登录页面-->
      <div>      <el-button type="info" @click="login" class="Login" v-if="ifIdNotExisted">登录</el-button>
        <el-button type="info" @click="logout">退出</el-button>
      </div>

    </el-header>

    <el-container>
<!--      取消侧边栏-->
      <!--//侧边栏-->
<!--      <el-aside width="200px">-->
<!--        <el-col :span="20">-->

<!--          <el-menu-->
<!--            default-active="2"-->
<!--            class="el-menu-vertical-demo"-->
<!--            @open="handleOpen"-->
<!--            @close="handleClose"-->
<!--            background-color="Transparent"-->
<!--            text-color="#000000"-->
<!--            active-text-color="T#67C23A"-->

<!--            :router="true">-->
<!--          &lt;!&ndash;侧边栏以index属性路由跳转&ndash;&gt;-->
<!--            <el-submenu index="1">-->
<!--              <template slot="title">-->
<!--                <i class="el-icon-location"></i>-->
<!--                <span>帖子</span>-->
<!--              </template>-->
<!--              <el-menu-item-group>-->
<!--                <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--                <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--                <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--                <el-menu-item index="1-4">选项4</el-menu-item>-->

<!--              </el-menu-item-group>-->
<!--            </el-submenu>-->

<!--            <el-menu-item index="3" >-->
<!--              <i class="el-icon-document"></i>-->
<!--              <span slot="title">页面二</span>-->
<!--            </el-menu-item>-->
<!--&lt;!&ndash;            根据index来进行组件选取,点击则进入对应/xxx链接&ndash;&gt;-->
<!--            <el-menu-item index="user">-->
<!--              <i class="el-icon-setting"></i>-->
<!--              <span slot="title">个人信息</span>-->
<!--            </el-menu-item>-->

<!--          </el-menu>-->

<!--        </el-col></el-aside>-->
<!--      //主页面-->
      <el-main>
<!--        路由占位符-->
<!--        渲染主页面-->
        <router-view></router-view>
      </el-main>

    </el-container>
    <GoTop></GoTop>
  </el-container>

</template>

<script>
import GoTop from "./GoTop";
import welcome from "./welcome";
export default {
  data(){
    return{
      ifIdNotExisted:true
    }

  },
  components:{
    GoTop
  },
  name: "Home",
  methods:{
    login() {
    this.$router.push('/login')
    },
    //每次刷新页面时就调用islogin，服务器便发送用户id
    islogin() {
      const self = this
      self.$axios({
        method:"get",
        //url一律要再次修改
        url:"/islogin"
      })
        .then(result => {
          //存储用户nickname
          this.$store.commit("saveLocalid",result.data.id)
          this.$store.commit("saveNickname",result.data.nickName)
        })
    },
    //退出向服务器发送请求，成功则将用户在本地信息删除
    logout(){
      const self = this;
      self.$axios({
        method:'get',
        url:'/logout',

      })
      .then(res=>{
        if(res.data.logout==="true")
        {
          this.$store.commit("saveLocalid",'')
          this.$store.commit("saveNickname",'')
          alert("退出账号成功！")
          console.log(res)
        }
        else {
          alert("退出账号失败！")
          console.log(res)
          alert(res.data.message)
        }
      })
    }
  },
  //每次刷新页面调用islogin确认登录状态
  created() {
    if(this.$store.state.localid){
      this.islogin()
      this.ifIdNotExisted = false
    }
    else {
      this.ifIdNotExisted = true
    }

  }
}
</script>

<style scoped>
.el-main{
  padding: 0;
}
.el-header{
  background-color: #102f6d;

  display: flex;
  justify-content: space-between;
  color: antiquewhite;
  font-size: 20px;
}
.el-aside{
  width: 150px;
  background-color: #FFFFFF;
}
.el-main{
  background-color: #FFFFFF;
}
.home-contaner{
  height: 100%;
}
.el-button{
  background-color: #102f6d;
  width: 100px;
  border: none;
  font-size: 15px;
  font-family:"宋体"

}
#buttonIN{
  left: 80%;
}
.Login{
  left: 10px;
}

/*.el-menu{*/
/*  width: 100px;*/
/*}*/
/*.el-menu-item{*/
/*  width: 100px;*/
/*}*/
/*.el-submenu{*/
/*  background-color: Transparent;*/
/*}*/
/*.el-menu-item{*/
/*  background-color: Transparent;*/
/*}*/
</style>

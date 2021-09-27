<template>

  <el-container class="home-contaner">
<!--    //头部-->
    <el-header>
      <div>
        <img src="../assets/NPU下载.png" alt="">
        <span style="font-size: 25px" >论坛</span>
      </div>
<!--      点击登录则跳转到登录页面-->
      <div>      <el-button type="info" @click="login" class="Login">登录</el-button>
        <el-button type="info" @click="logout">退出</el-button>
      </div>

    </el-header>

    <el-container>
      <!--//侧边栏-->
      <el-aside width="200px">
        <el-col :span="20">

          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="Transparent"
            text-color="#000000"
            active-text-color="T#67C23A"

            :router="true">
          <!--侧边栏以index路由跳转-->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>帖子</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-4">选项4</el-menu-item>

              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="3" >
              <i class="el-icon-document"></i>
              <span slot="title">页面二</span>
            </el-menu-item>
<!--            根据index来进行组件选取,点击则进入对应/xxx链接-->
            <el-menu-item index="user">
              <i class="el-icon-setting"></i>
              <span slot="title">个人信息</span>
            </el-menu-item>

          </el-menu>

        </el-col></el-aside>
<!--      //主页面-->
      <el-main>
<!--        路由占位符-->
<!--        渲染主页面-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
export default {
  name: "Home",
  methods:{
    login() {
    this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
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

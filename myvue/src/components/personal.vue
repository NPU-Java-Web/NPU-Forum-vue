<template>
  <div style="background-color:#FCFCFC;font-family:'宋体';height:100%;">
    <div>
      <my-bread level1='个人中心' level2='修改密码' :level3="level"></my-bread>
    </div>
    <div style="margin-top:25px;margin-left:80px;">
      <el-row :gutter="10">
        <el-col :span="2">
          <div style="background-color:#FFEBCD;width:60px;height:60px;display:inline-block;border-radius:50%;overflow:hidden;">
            <el-image :src="src" style="width:60px;height:60px;"></el-image>
          </div>
          <div style="margin-top:5px;margin-left:6px;"><span>{{nickname}}</span></div>
          <div style="margin-top:50px;margin-left:1px;"><el-button type="text" style="font-size:15px;color:#4D4D4D;"  @click="infomationClick()">个人信息<span style="color:#B0E0E6;" v-show="infomationShow" class="el-icon-s-promotion"></span></el-button></div>
<!--          <div style="margin-top:5px;margin-left:1px;"><el-button @click="resetUserProfile()">修改信息<span style="color:#B0E0E6;" class="el-icon-s-promotion"></span></el-button></div>-->
        </el-col>

        <el-col :span="21">
          <el-row :gutter="10" style="margin-top:20px;">
            <el-col :span="2"><div style="text-align:right;"><span>ID：</span></div></el-col>
            <el-col :span="5">{{userId}}</el-col>
          </el-row>
          <!-- 个人信息 -->
          <el-row v-show="infomationShow">
            <el-card style="margin-top:30px;">
              <el-row>
                <el-col :span="6">
                  <el-row :gutter="12" style="margin-top:20px;">
                    <el-col :span="8"><div style="text-align:right;"><span>用户名：</span></div></el-col>
                    <el-col :span="16">{{nickname}}</el-col>
                  </el-row>
                  <el-row :gutter="12" style="margin-top:30px;">
                    <el-col :span="8"><div style="text-align:right;"><span>手机号：</span></div></el-col>
                    <el-col :span="16">{{this.phone}}</el-col>
                  </el-row>
                  <el-row :gutter="12" style="margin-top:30px;">
                    <el-col :span="8"><div style="text-align:right;"><span>学院：</span></div></el-col>
                    <el-col :span="16">{{this.college}}</el-col>
                  </el-row>
                  <el-row :gutter="12" style="margin-top:30px;">
                    <el-col :span="8"><div style="text-align:right;"><span>生日：</span></div></el-col>
                    <el-col :span="16">{{this.birthday}}</el-col>
                  </el-row>
                  <el-row :gutter="12" style="margin-top:30px;">
                    <el-col :span="15"><div style="text-align:right;"><span>介绍：</span></div></el-col>
                    <el-col :span="30">{{this.introduction}}</el-col>
                  </el-row>
                </el-col>

              </el-row>
            </el-card>
          </el-row>
          <!-- 修改密码 -->
      <!--          <el-row v-show="passwordShow">-->
      <!--            <el-card style="margin-top:30px;">-->
      <!--              <el-form :model="personalForm">-->
      <!--                <el-row :gutter="12" style="margin-top:20px;">-->
      <!--                  <el-col :span="6">-->
      <!--                    <div style="text-align:right;"><span>账号：</span></div>-->
      <!--                  </el-col>-->
      <!--                  <el-col :span="5">-->
      <!--                    <el-form-item prop="account">-->
      <!--                      <el-input type="text" v-model="personalForm.account" placeholder="请输入您的账号" ></el-input>-->
      <!--                    </el-form-item>-->
      <!--                  </el-col>-->
      <!--                </el-row>-->
      <!--                <el-row :gutter="12" style="margin-top:1px;">-->
      <!--                  <el-col :span="6">-->
      <!--                    <div style="text-align:right;"><span>手机号：</span></div>-->
      <!--                  </el-col>-->
      <!--                  <el-col :span="5">-->
      <!--                    <el-form-item prop="phone_num">-->
      <!--                      <el-input type="text" v-model="personalForm.phone_num" placeholder="绑定的手机号" ></el-input>-->
      <!--                    </el-form-item>-->
      <!--                  </el-col>-->
      <!--                </el-row>-->
      <!--                <el-row :gutter="12" style="margin-top:1px;">-->
      <!--                  <el-col :span="6">-->
      <!--                    <div style="text-align:right;"><span>密码：</span></div>-->
      <!--                  </el-col>-->
      <!--                  <el-col :span="5">-->
      <!--                    <el-form-item prop="password1">-->
      <!--                      <el-input type="password" show-password v-model="personalForm.password1" placeholder="请输入新的密码" ></el-input>-->
      <!--                    </el-form-item>-->
      <!--                  </el-col>-->
      <!--                </el-row>-->
      <!--                <el-row :gutter="12" style="margin-top:1px;">-->
      <!--                  <el-col :span="6">-->
      <!--                    <div style="text-align:right;"><span>确认密码：</span></div>-->
      <!--                  </el-col>-->
      <!--                  <el-col :span="5">-->
      <!--                    <el-form-item prop="password2">-->
      <!--                      <el-input type="password" show-password v-model="personalForm.password2" placeholder="请再次输入新的密码" ></el-input>-->
      <!--                    </el-form-item>-->
      <!--                  </el-col>-->
      <!--                </el-row>-->
      <!--                <el-row :gutter="12" style="margin-top:1px;">-->
      <!--                  <el-col :span="6">-->
      <!--                    <div style="text-align:right;"><span>验证码：</span></div>-->
      <!--                  </el-col>-->
      <!--                  <el-col :span="5">-->
      <!--                    <el-form-item prop="verification">-->
      <!--                      <el-input type="text" v-model="personalForm.verification" placeholder="验证码" ></el-input>-->
      <!--                    </el-form-item>-->
      <!--                  </el-col>-->
      <!--                  <el-col :span="2">-->
      <!--                    <el-button type="primary" plain round size="medium" @click="sendMsg()" :disabled="isDisabled">{{ buttonName }}</el-button>-->
      <!--                  </el-col>-->
      <!--                </el-row>-->
      <!--                <el-row :gutter="12" style="margin-top:10px;">-->
      <!--                  <el-col :span="17" style="text-align:center;">-->
      <!--                    <el-button type="primary" plain round size="medium" @click="submit()">修改</el-button>-->
      <!--                  </el-col>-->
      <!--                </el-row>-->
      <!--              </el-form>-->
      <!--            </el-card>-->
      <!--          </el-row>-->
        </el-col>
      </el-row>
    </div>

    <div>

    </div>
  </div>
</template>

<script>
import npulogo from "../assets/npu-logo.png";

export default {
  name: "personal",
  data(){
    return{
      userInfo:true,
      src:npulogo,
      levelName:'',
      isCollapse:false,
      infomationShow:true,
      passwordShow:false,
      buttonName:"发送短信",
      isDisabled:false,
      time:60,
      personalId : this.$route.params.id,
      birthday:"",
      college:"",
      gender:"",
      level:'',
      likes:"",
      nickname:"",
      phone:"",
      points:"",
      published:"",
      userId:"",
      visits:"",
      introduction:""
    }
    },
  created() {
    this.getInfos()
  },
  methods:{
    getInfos(){
      const self = this
      // let url = '/posts/' + this.postsId + '/100/1/1'
      //size为楼层数量
      let url = "user/"+this.personalId
      self.$axios({
        method: 'get',
        url: url
      })
        .then(res => {
          if (res.data.flag === true) {
            //  alert(res.data.message)
            this.birthday = res.data.data.birthday
            this.college = res.data.data.college
            this.gender = res.data.data.gender
            this.level = res.data.data.level
            this.likes = res.data.data.likes
            this.nickname = res.data.data.nickname
            this.phone = res.data.data.phone
            this.points = res.data.data.points
            this.published = res.data.published
            this.userId = res.data.data.userId
            this.visits = res.data.visits
            this.introduction = res.data.data.introduction
            console.log(res)


          } else {
            alert(res.data.message)
            alert(res.data.data)
            console.log(res)
          }
        })
    }
  }
}
</script>


<style scoped>
.personalContainer {
  display: flex;
  justify-content: center;
  font-size: 15px;
  background-color: #f8f8f8;
  min-height: calc(100vh - 74px);
}

.personal {
  max-width: 1200px;
  width: 91vw;
}

.background {
  width: 100%;
  height: 350px;
  border-radius: 10px;
  margin: 30px 0;
  position: relative;
  background: url("../assets/1.jpg") no-repeat;
  background-size: cover;
  background-position-y: 60%;
  color: #f9f9f9;
  box-shadow: 0 25px 25px -10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.avatar {
  margin-right: 20px;
}

.avatar img {
  height: 100px;
  width: 100px;
  border-radius: 10px;
  border: 3px solid #f9f9f9;
}

.userName {
  color: white;
  font-weight: bold;
}

.left {
  position: absolute;
  bottom: 25px;
  left: 30px;
  display: flex;
}

.right {
  position: absolute;
  bottom: 35px;
  right: 30px;
  display: flex;
}

.right > div {
  margin-left: 30px;
  cursor: pointer;
}

.right div span {
  font-weight: 600;
}

.userName {
  font-size: 20px;
  position: relative;
  margin: 25px 0 10px;
  /* block独占一行 会撑满一行 所以下面改为inline-block*/
  display: inline-block;
}

.tag {
  font-size: 12px;
  position: absolute;
  right: -85px;
  top: 4px;
  background-color: #ffde66;
  color: #d50101;
  padding: 2px 4px;
  border-radius: 4px;
}

.background:hover .userInfoControl {
  top: 20px;
}

.userInfoControl {
  position: absolute;
  right: 20px;
  top: -50px;
  display: flex;
  transition: all 0.4s;
}

.userInfoControlItem {
  border-radius: 50%;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  cursor: pointer;
}

.userInfoControlItem i {
  font-size: 17px;
  font-weight: bold;
}

.logout {
  background-color: #ff1332;
}

.edit {
  background-color: #2962ff;
}

.add {
  background-color: #fdce02;
}

.dialogInputItem {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.inputTitle {
  width: 85px;
}

.bottom {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0 50px;
}

.personal /deep/ .el-loading-spinner {
  margin-top: 0px;
  top: 20%;
}

.tips {
  margin: 60px 0;
  font-size: 14px;
  color: rgb(133, 133, 133);
  text-align: center;
}

.uploadAvatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.el-input {
  width: 83%;
}

 .name{ text-align: right; }
.value{ text-align: left; }


</style>

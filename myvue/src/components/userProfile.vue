<template>
  <div style="background-color:#FCFCFC;font-family:'宋体';height:100%;">
    <div>
      <my-bread level1='个人中心' level2='修改密码' :level3="levelName"></my-bread>
    </div>
    <div style="margin-top:25px;margin-left:80px;">
      <el-row :gutter="10">
        <el-col :span="2">
          <div style="background-color:#FFEBCD;width:60px;height:60px;display:inline-block;border-radius:50%;overflow:hidden;">
            <el-image :src="src" style="width:60px;height:60px;"></el-image>
          </div>
          <div style="margin-top:5px;margin-left:6px;"><span>{{formLabelAlign.realName}}</span></div>
          <div style="margin-top:50px;margin-left:1px;"><el-button type="text" style="font-size:15px;color:#4D4D4D;"  @click="infomationClick()">个人信息<span style="color:#B0E0E6;" v-show="infomationShow" class="el-icon-s-promotion"></span></el-button></div>
          <div style="margin-top:5px;margin-left:1px;"><el-button type="text" style="font-size:15px;color:#4D4D4D;" @click="passwordClick()">修改密码<span style="color:#B0E0E6;" v-show="passwordShow" class="el-icon-s-promotion"></span></el-button></div>
        </el-col>

        <el-col :span="21">
          <el-row :gutter="10" style="margin-top:20px;">
            <el-col :span="2"><div style="text-align:right;"><span>账号：</span></div></el-col>
            <el-col :span="5">{{formLabelAlign.id}}</el-col>
          </el-row>
          <!-- 个人信息 -->
          <el-row v-show="infomationShow">
            <el-card style="margin-top:30px;">
              <el-row>
                <el-col :span="6">
                  <el-row :gutter="12" style="margin-top:20px;">
                    <el-col :span="8"><div style="text-align:right;"><span>姓名：</span></div></el-col>
                    <el-col :span="16">{{formLabelAlign.realName}}</el-col>
                  </el-row>
                  <el-row :gutter="12" style="margin-top:30px;">
                    <el-col :span="8"><div style="text-align:right;"><span>手机号：</span></div></el-col>
                    <el-col :span="16">{{formLabelAlign.phoneNumber}}</el-col>
                  </el-row>
                  <el-row :gutter="12" style="margin-top:30px;">
                    <el-col :span="8"><div style="text-align:right;"><span>电子邮箱：</span></div></el-col>
                    <el-col :span="16">{{formLabelAlign.email}}</el-col>
                  </el-row>
                  <el-row :gutter="12" style="margin-top:30px;">
                    <el-col :span="8"><div style="text-align:right;"><span>昵称：</span></div></el-col>
                    <el-col :span="16">{{formLabelAlign.nickName}}</el-col>
                  </el-row>
                  <el-row :gutter="12" style="margin-top:30px;">
                    <el-col :span="8"><div style="text-align:right;"><span>生日：</span></div></el-col>
                    <el-form-item prop="date1">
                      <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.birthday" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-row>
                  <el-row :gutter="12" style="margin-top:30px;">
                    <el-col :span="8"><div style="text-align:right;"><span>介绍：</span></div></el-col>
                    <el-col :span="16">{{formLabelAlign.introduction}}</el-col>
                  </el-row>
                </el-col>

              </el-row>
            </el-card>
          </el-row>
          <!-- 修改密码 -->
          <el-row v-show="passwordShow">
            <el-card style="margin-top:30px;">
              <el-form :model="personalForm">
                <el-row :gutter="12" style="margin-top:20px;">
                  <el-col :span="6">
                    <div style="text-align:right;"><span>账号：</span></div>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item prop="account">
                      <el-input type="text" v-model="personalForm.account" placeholder="请输入您的账号" ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="12" style="margin-top:1px;">
                  <el-col :span="6">
                    <div style="text-align:right;"><span>手机号：</span></div>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item prop="phone_num">
                      <el-input type="text" v-model="personalForm.phone_num" placeholder="绑定的手机号" ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="12" style="margin-top:1px;">
                  <el-col :span="6">
                    <div style="text-align:right;"><span>密码：</span></div>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item prop="password1">
                      <el-input type="password" show-password v-model="personalForm.password1" placeholder="请输入新的密码" ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="12" style="margin-top:1px;">
                  <el-col :span="6">
                    <div style="text-align:right;"><span>确认密码：</span></div>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item prop="password2">
                      <el-input type="password" show-password v-model="personalForm.password2" placeholder="请再次输入新的密码" ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="12" style="margin-top:1px;">
                  <el-col :span="6">
                    <div style="text-align:right;"><span>验证码：</span></div>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item prop="verification">
                      <el-input type="text" v-model="personalForm.verification" placeholder="验证码" ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="2">
                    <el-button type="primary" plain round size="medium" @click="sendMsg()" :disabled="isDisabled">{{ buttonName }}</el-button>
                  </el-col>
                </el-row>
                <el-row :gutter="12" style="margin-top:10px;">
                  <el-col :span="17" style="text-align:center;">
                    <el-button type="primary" plain round size="medium" @click="submit()">修改</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </el-card>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div>

    </div>
  </div>
</template>
<script>

import npulogo from '../assets/npu-logo.png'

export default {
  name:'userProfile',
  data(){
    return {
      src:npulogo,
      levelName:'',
      isCollapse:false,
      infomationShow:false,
      passwordShow:false,
      buttonName:"发送短信",
      isDisabled:false,
      time:60,
      personalForm:{
        account:"",
        phone_num:"",
        verification:"",
        password1:"",
        password2:"",
      },

      labelPosition: 'right',
      formLabelAlign: {
        id:this.$store.state.localid,
        email:'',
        realName:'',
        nickName:'',
        college:'',
        phoneNumber:'',
        birthday:'',
        introduction:'',
      },
      rules: {
        name: [
          { required: false, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请输入学院', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: false, message: '请输入日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ],
        number:[
          {required:false,message:'输入11位电话',trigger:'change'}
        ]
      }

    }
  },

  created() {
    this.getInfos()
  },

  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
      console.log(key)
      console.log(keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },

    infomationClick(){    //个人信息事件
      this.infomationShow = true
      this.passwordShow = false
    },

    passwordClick(){     //密码事件
      this.infomationShow = false
      this.passwordShow = true
    },
    sendMsg() {    //时间按钮
      let me = this;
      me.isDisabled = true;
      let interval = window.setInterval(function() {
        me.buttonName = "(" + me.time + ")秒"
        --me.time;
        if(me.time < 0) {
          me.buttonName = "重新发送"
          me.time = 60
          me.isDisabled = false
          window.clearInterval(interval)
        }
      }, 1000);
      //获取短信验证码
      // this.$http.get('/?phone_num=' + this.personalForm.phone_num).then(res => {
      //     this.$message.success("短信已发送,请查收")
      // })
    },
    submit(){  //提交
      if(this.personalForm.account === ""){
        this.$message.warning("账号不能为空")
      }else if(this.personalForm.phone_num === ""){
        this.$message.warning("手机号不能为空")
      }else if(this.personalForm.password1 === ""){
        this.$message.warning("密码不能为空")
      }else if(this.personalForm.password2 === ""){
        this.$message.warning("密码不能为空")
      }else if(this.personalForm.verification === ""){
        this.$message.warning("验证码不能为空")
      }else{
        if(this.personalForm.password1 === this.personalForm.password2){
          this.$message.success("修改成功")
          // const params = {
          //     account:this.personalForm.account,
          //     phone_num:this.personalForm.phone_num,
          //     password1:this.personalForm.password1,
          //     password2:this.personalForm.password2,
          //     verification:this.personalForm.verification,
          // }
          // console.log(params)
          // this.$http.post('',params).then(res => {
          //     console.log(res)
          // })
        }else{
          this.$message.warning("两次输入的密码不一致,请重新输入")
        }

      }
    },

    //

    getInfos() {
      const self = this;
      // alert(this.$store.state.localid)
      if (self.$store.state.localid !== ''&&self.$store.state.localid !== null) {
        self.$axios({
          method: 'get',
          url: '/myhome'
        })
          .then(res => {
            console.log(res)
            self.formLabelAlign.birthday = res.data.birthday
            self.formLabelAlign.college = res.data.college
            //id为前端静态库里面存储的，不用接受后端返回值
            //  this.formLabelAlign.id = res.data.id
            self.formLabelAlign.email = res.data.email
            self.formLabelAlign.introduction = res.data.introduction
            self.formLabelAlign.nickName = res.data.nickName
            self.formLabelAlign.phoneNumber = res.data.phoneNumber
            self.formLabelAlign.realName = res.data.realName
          })
      }
      else{
        alert("未登录无法查看个人信息，请先登录")
        this.$router.push("/index")

      }
    }
    ,
    onSubmit() {
      const self = this;
      if (this.$store.state.localid !== '') {
        if(this.vaildPhonenumber()===false)
        {
          alert("请重新正确填写")
        }
        self.$axios({
          method: 'post',
          url: '/modify/my-information',
          data: {
            // id: self.formLabelAlign.id,
            email:self.formLabelAlign.email,
            realName: self.formLabelAlign.realName,
            nickName: self.formLabelAlign.nickName,
            college: self.formLabelAlign.college,
            phoneNumber: self.formLabelAlign.phoneNumber,
            birthday: self.formLabelAlign.birthday,
            introduction: self.formLabelAlign.introduction
          }
        })
          .then(res => {
            if(res.data.status===200)
            {
              console.log(res)
              alert(res.data.message)
            }
            else{
              console.log(res)
              alert(res.data.message)
            }
          })
          .catch(err => {
            alert(err);
          })
      }


    },
    //验证手机号
    vaildPhonenumber(){
      if(this.formLabelAlign.phoneNumber!=null)
      {
        var length1 = this.formLabelAlign.phoneNumber.length;
      }
      if(length1>11)
      {
        alert("手机号输入错误")
        return false;
      }
      else{
        return true;
      }
    }


    //
  }
}
</script>

<style>
.name{ text-align: right; }
.value{ text-align: left; }
</style>

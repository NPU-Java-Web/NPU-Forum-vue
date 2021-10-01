<template>
<div>
  <h3>用户信息</h3>
  <el-radio-group v-model="labelPosition" size="small">
    <el-radio-button label="left">左对齐</el-radio-button>
    <el-radio-button label="right">右对齐</el-radio-button>
    <el-radio-button label="top">顶部对齐</el-radio-button>
  </el-radio-group>
  <div style="margin: 20px;"></div>
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="id">
      <el-input v-model="formLabelAlign.id" type="text" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="真实姓名">
      <el-input v-model="formLabelAlign.realName" type="text" ></el-input>
    </el-form-item>
    <el-form-item label="网名">
      <el-input v-model="formLabelAlign.nickName" type="text"></el-input>
    </el-form-item>
    <el-form-item label="学院">
      <el-input v-model="formLabelAlign.college" type="text"></el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="formLabelAlign.phoneNumber" type="text"></el-input>
    </el-form-item>
    <el-form-item label="生日">
      <el-input v-model="formLabelAlign.birthday" type="text"></el-input>
    </el-form-item>
    <el-form-item label="介绍">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="formLabelAlign.introduction">
      </el-input>
    </el-form-item>
  </el-form>
  <el-button type="primary" @click="onSubmit">立即创建</el-button>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
       id:this.$store.state.localid,
        realName:'',
        nickName:'',
        college:'',
        phoneNumber:'',
        birthday:'',
        introduction:'',
        email:''
      }
    };
  },
  //创建钩子函数，在页面创建前向服务器发出请求，返回用户信息
  created() {
    this.getInfos()
  },
  methods: {
    getInfos() {
      const self = this;
      if (this.$store.state.localid !== '') {
        self.$axios({
          method: 'get',
          url: '/myhome'
        })
          .then(res => {
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
        alert("请先登录")
      }
    }
    ,
    onSubmit() {
      const self = this;
      if (this.$store.state.localid !== '') {
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
      } else alert("请先登录")
    }
  }
  }
</script>

<style scoped>
</style>
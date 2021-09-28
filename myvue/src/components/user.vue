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
      <el-input v-model="formLabelAlign.id" type="text"></el-input>
    </el-form-item>
    <el-form-item label="真实姓名">
      <el-input v-model="formLabelAlign.realName" type="text"></el-input>
    </el-form-item>
    <el-form-item label="网名">
      <el-input v-model="formLabelAlign.nickName" type="text"></el-input>
    </el-form-item>
    <el-form-item label="学院">
      <el-input v-model="formLabelAlign.nickName" type="text"></el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="formLabelAlign.nickName" type="text"></el-input>
    </el-form-item>
    <el-form-item label="生日">
      <el-input v-model="formLabelAlign.nickName" type="text"></el-input>
    </el-form-item>
    <el-form-item label="介绍">
      <el-input v-model="formLabelAlign.nickName" type="text"></el-input>
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
        introduction:''
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
      if (this.$store.state.localid != '') {
        self.$axios({
          method: 'post',
          url: '',
          data: {
            id: self.formLabelAlign.id
            ///ask:'ask-information'
          }

        })
          .then(res => {
            this.id = res.data.id
            this.realName = res.data.realName
            this.nickName = res.data.nickName
            this.college = res.data.college
            this.phoneNumber = res.data.phoneNumber
            this.birthday = res.data.birthday
            this.introduction = res.data.introduction
          })
      }
    }
    ,
    onSubmit() {
      const self = this;
      if (self.formLabelAlign.realName != "") {
        axios({
          method: 'post',
          url: '',
          data: {
            id: self.formLabelAlign.id,
            realName: self.formLabelAlign.realName,
            nickName: self.formLabelAlign.nickName,
            college: self.formLabelAlign.college,
            phoneNumber: self.formLabelAlign.phoneNumber,
            birthday: self.formLabelAlign.birthday,
            introduction: self.formLabelAlign.introduction
          }
        })
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err);
          })
      } else alert("真实姓名不能为空！")

    }
  }
  }

</script>

<style scoped>

</style>

<!--2021.10.1 14：34-->
<template>
<div>
  <h3>用户信息</h3>
  <el-radio-group v-model="labelPosition" size="small">
    <el-radio-button label="left">左对齐</el-radio-button>
    <el-radio-button label="right">右对齐</el-radio-button>
    <el-radio-button label="top">顶部对齐</el-radio-button>
  </el-radio-group>
  <div style="margin: 20px;"></div>
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" :rules="rules">
    <el-form-item label="uid">
      <el-input v-model="formLabelAlign.id" type="text" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="年级">
      <el-input v-model="formLabelAlign.gender" type="text"></el-input>
    </el-form-item>
    <el-form-item label="真实姓名" prop="name" >
      <el-input v-model="formLabelAlign.realName" type="text" placeholder="输入本人真实姓名"></el-input>
    </el-form-item>
    <el-form-item label="网名" >
      <el-input v-model="formLabelAlign.nickName" type="text" ></el-input>
    </el-form-item>
    <el-form-item label="学院" >
      <el-select v-model="formLabelAlign.college" placeholder="请选择学院" style="width: 100%;">
        <el-option label="软件学院" value="软件学院"></el-option>
        <el-option label="计算机学院" value="计算机学院"></el-option>
        <el-option label="网安学院" value="网安学院"></el-option>
        <el-option label="计算机学院" value="计算机学院"></el-option>
        <el-option label="航空学院" value="航空学院"></el-option>
        <el-option label="航天学院" value="航天学院"></el-option>
        <el-option label="航海学院" value="航海学院"></el-option>
        <el-option label="材料学院" value="材料学院"></el-option>
        <el-option label="机电学院" value="机电学院"></el-option>
        <el-option label="力学与土木建筑学院" value="力学与土木建筑学院"></el-option>
        <el-option label="动能学院" value="动能学院"></el-option>
        <el-option label="电子信息学院" value="电子信息学院"></el-option>
        <el-option label="自动化学院" value="自动化学院"></el-option>
        <el-option label="数统学院" value="数统学院"></el-option>
        <el-option label="物理科学与技术学院" value="物理科学与技术学院"></el-option>
        <el-option label="化学与化工学院" value="化学与化工学院"></el-option>
        <el-option label="管理学院" value="管理学院"></el-option>
        <el-option label="公共政策与管理学院" value="公共政策与管理学院"></el-option>
        <el-option label="生命学院" value="生命学院"></el-option>
        <el-option label="外国语学院" value="外国语学院"></el-option>
        <el-option label="教育实验学院" value="教育实验学院"></el-option>
        <el-option label="国际教育学院" value="国际教育学院"></el-option>
        <el-option label="国家保密学院" value="国家保密学院"></el-option>
        <el-option label="马克思主义学院" value="马克思主义学院"></el-option>
        <el-option label="伦敦玛丽女王学院" value="伦敦玛丽女王学院"></el-option>
        <el-option label="微电子学院" value="微电子学院"></el-option>
        <el-option label="民航学院" value="民航学院"></el-option>
        <el-option label="生态环境学院" value="生态环境学院"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="手机号" prop="number" >
      <el-input v-model="formLabelAlign.phoneNumber" type="text" placeholder="输入11位手机号"></el-input>
    </el-form-item>
<!--    <el-form-item label="邮箱"  >-->
<!--      <el-input v-model="formLabelAlign.email" type="text" placeholder="输入邮箱"></el-input>-->
<!--    </el-form-item>-->
    <el-form-item label="生日" required>
        <el-form-item prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.birthday" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-form-item>
    <el-form-item label="介绍">
      <el-input
        type="textarea"
        :rows="6"
        placeholder="请输入内容"
        v-model="formLabelAlign.introduction">
      </el-input>
    </el-form-item>
  </el-form>
  <el-button type="primary" @click="onSubmit">立即创建</el-button>
</div>
</template>

<script>
export default {
  data() {
    return {
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
        gender:''
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
    };
  },


  //创建钩子函数，在页面创建前向服务器发出请求，返回用户信息
  created() {
    this.getInfos()
  },
  methods: {
    getInfos() {
      const self = this;
     alert(this.$store.state.localid)
      if (self.$store.state.localid !== ''&&self.$store.state.localid !== null) {
        self.$axios({
          method: 'get',
          url: 'user/'+self.$store.state.localid
        })
          .then(res => {
            console.log(res)
            self.formLabelAlign.birthday = res.data.data.birthday
            self.formLabelAlign.college = res.data.data.college
            //id为前端静态库里面存储的，不用接受后端返回值
          //  this.formLabelAlign.id = res.data.id
            self.formLabelAlign.email = res.data.data.email
            self.formLabelAlign.introduction = res.data.data.introduction
            self.formLabelAlign.nickName = res.data.data.nickname
            self.formLabelAlign.phoneNumber = res.data.data.phone
            self.formLabelAlign.realName = res.data.data.realName
            self.formLabelAlign.gender = res.data.data.gender
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
          method: 'put',
          url: '/user',
          headers:{
            "token":self.$store.state.token
          },
          data: {
            userId: self.formLabelAlign.id,
          //  email:self.formLabelAlign.email,
           // realName: self.formLabelAlign.realName,
            nickname: self.formLabelAlign.nickName,
            college: self.formLabelAlign.college,
            phone: self.formLabelAlign.phoneNumber,
            birthday: self.formLabelAlign.birthday,
            introduction: self.formLabelAlign.introduction,
            gender: self.formLabelAlign.gender
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


  }
  }
</script>

<style scoped>
</style>

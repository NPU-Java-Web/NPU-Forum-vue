<template>
  <body>
  <h1>发布新帖子</h1>
  <el-form ref="form" :model="form" label-width="80px" :rules="rules">
    <el-form-item label="帖子标题" prop="title">
      <el-input v-model="form.title" ></el-input>
    </el-form-item>
    <el-form-item label="活动分类" prop="category">
      <el-select v-model="form.category" placeholder="请选择分类">
        <el-option label="分类1" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="帖子内容" prop="content">
      <el-input type="textarea" v-model="form.content" :rows="20"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="returnMain">取消</el-button>
    </el-form-item>
  </el-form>

  </body>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      postsId:'',
      form: {
        title: '',
        category: '',
        content: ''
      },
      rules:{
        title:[{required : true,message: '请输入标题',trigger:'blur'}],
        content:[{required : true,message: '请输入内容',trigger:'blur'}],
        category:[{required : true,message: '请选择分类',trigger:'change'}],
      }
    }
  },
  created() {
if(this.$store.state.localid===''||this.$store.state.localid===null){
      alert("未登录，无法发布")
    }
  },
  methods: {
    onSubmit() {
      //alert('submit!');
      if(this.form.content===''||this.form.title===''||this.form.category==="")
      {
        alert("有未填写项，无法发布")
      }
      else if(this.$store.state.localid===''||this.$store.state.localid===null){
        alert("未登录，无法发布")
      }
      else {
        const self = this;
        self.$axios({
          method:'post',
          url:'/posts/new',
          data:{
            category:self.form.category,
            title:self.form.title,
            content:self.form.content
          }
        })
        .then(res=>{
          if(res.data.status===200)
          {
            alert(res.data.message)
            console.log(res)
            self.postsId=res.data.postsId
          }
          else {
            alert(res.data.message)
          }

        })
      }
    },
    returnMain(){

      // this.$router.push("/index");
      //测试路由跳转
      this.$router.push({ name: 'posts', params: { postsId: '123456' } })
    }

  }
}
</script>

<style scoped>

</style>

<template>
  <div class="login-register">
<!--    contai为主容器-->
    <div class="contain">
<!--      big contain为主部件-->
<!--      big-box为实现页面跳转，通过active和islogin实现-->
      <div class="big-box" :class="{active:isLogin}">
<!--        登录处理-->
        <div class="big-contain" v-if="isLogin">
          <div class="btitle">账户登录</div>
          <div class="bform">
            <input type="email" placeholder="学号" v-model="form.id">
            <span class="errTips" v-if="emailError">* 邮箱填写错误 *</span>
            <input type="password" placeholder="密码" v-model="form.password">
            <span class="errTips" v-if="emailError">* 密码填写错误 *</span>
          </div>
          <button class="bbutton" @click="login">登录</button>
        </div>
<!--注册处理-->
        <div class="big-contain" v-else>
          <div class="btitle">创建账户</div>
          <div class="bform">
            <input type="text" placeholder="用户名" v-model="form.id">
            <span class="errTips" v-if="existed">* 用户名已经存在！ *</span>
            <input type="email" placeholder="邮箱" v-model="form.useremail">
            <input type="password" placeholder="密码" v-model="form.password">
            <div>
              <input type="password" placeholder="确认密码" v-model="rePassword" style="float: left">
              <div v-if="form.password !== rePassword && rePassword!==''">
                <p style="color: red">invalid</p>
              </div>
              <div v-else-if="form.password === rePassword && rePassword !== ''">
                <p style="color: lawngreen">valid</p>
              </div>
              <div v-else></div>
            </div>
          </div>
          <div>
            <button class="bbutton" @click="register"style="display: inline">注册</button>:<button class="bbutton">返回</button>
          </div>
        </div>
<!--        页面翻转-->
      </div>
      <div class="small-box" :class="{active:isLogin}">
        <div class="small-contain" v-if="isLogin">
          <div class="stitle">欢迎回家小瓜子！</div>
          <p class="scontent">如果没有账号，请先注册</p>
          <button class="sbutton" @click="changeType">注册</button>
        </div>
        <div class="small-contain" v-else>
          <div class="stitle">欢迎光临小瓜子！</div>
          <p class="scontent">若有账号，请立即登录</p>
          <button class="sbutton" @click="changeType">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name:'login-register',
  data(){
    return {
      isLogin:false,
      emailError: false,
      passwordError: false,
      existed: false,
      rePasswordError:false,
      rePassword:'',
      form:{
        id:'',
        useremail:'',
        password:''
      }
    }
  },
  methods:{
    changeType() {
      this.isLogin = !this.isLogin
      this.form.id = ''
      this.form.useremail = ''
      this.form.password = ''
    },
    login() {

      const self = this;

      if (self.form.useremail === "" && self.form.password === "") {
        window.alert("填写不能为空！");
        return;
      }
      else if(this.validID() === false){
        window.alert("请输入正确的学号");
        return;
      }
      else if(this.finiteLengthPassword()===false){
        window.alert("密码过长请重新输入");
        return;
      }
      else{
        this.$router.push("/index");
        self.$axios({
          method:'post',
          url: '',
          data: {
            email: self.form.useremail,
            password: self.form.password
          }
        })


          .then( res => {
            switch(res.data){
              case 0:
                alert("登陆成功！");
                break;
              case -1:
                this.emailError = true;
                break;
              case 1:
                this.passwordError = true;
                break;
            }
          })
          .catch( err => {
            console.log(err);
          })
      }
    },
    register(){
      const self = this;

      if(this.validID() === false){
        window.alert("请输入正确的学号");
        return;
      }
      else if(this.validEmail() === false){
        window.alert("请输入正确的邮箱");
        return;
      }
      else if(this.finiteLengthPassword()===false){
        window.alert("密码过长请重新输入");
        return;
      }
      else if(this.consistentPassword()===false){
        window.alert("两次输入密码不统一");
        return;
      }
      else if(self.form.username === "" && self.form.useremail === "" && self.form.password === ""){
        window.alert("填写不能为空！");
      }
      else{
        this.$router.push("/index")
        self.$axios({
          method:'post',
          url: '',
          data: {
            username: self.form.username,
            email: self.form.useremail,
            password: self.form.password
          }
        })
          .then( res => {
            switch(res.data){
              case 0:
                alert("注册成功！");
                this.login();
                break;
              case -1:
                this.existed = true;
                break;
            }
          })
          .catch( err => {
            console.log(err);
          })
      }
    },
    created() {
      // Simple POST request with a JSON body using axios
      const article = { title: "Vue POST Request Example" };
      axios.post("https://reqres.in/api/articles", article)
        .then(response => this.articleId = response.data.id);
    },

    /*
     * 表单信息合法性验证函数
     * @author WarmCongee
     */
    //学号输入是否合法
    validID(){
      if(this.form.id.length != 10) {
        return false;
      }else{
        return true;
      }
    },
    //验证邮箱是否合法
    validEmail() {
      const verify = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      this.emailError = !verify.test(this.useremail);
      return !this.emailError;
    },
    //验证nickname和realname长度是否合法
    finiteLengthName(name){
      return name.length < 10;

    },
    //验证密码长度是否合法
    finiteLengthPassword(){
      if(this.form.id.length >= 32) {
        alert("密码过长请重新输入");
        return false;
      }
      return true;
    },
    //验证注册时两次输入密码是否相同
    consistentPassword(){
      if(this.form.password != this.rePassword){
        this.rePasswordError = true;
        return false;
      }
      else{
        this.rePasswordError = false;
        return true;
      }
    }
  }
}
</script>

<style scoped="scoped">
.login-register{
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: antiquewhite;
}
.contain{
  width: 60%;
  height: 60%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 3px #f0f0f0,
  0 0 6px #f0f0f0;
}
.big-box{
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 30%;
  transform: translateX(0%);
  transition: all 1s;
}
.big-contain{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btitle{
  font-size: 1.5em;
  font-weight: bold;
  color: rgb(57,167,176);
}
.bform{
  width: 100%;
  height: 50%;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.bform .errTips{
  display: block;
  width: 50%;
  text-align: left;
  color: red;
  font-size: 0.7em;
  margin-left: 1em;
}
.bform input{
  width: 50%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding-left: 2em;
  background-color: #f0f0f0;
}
.bbutton{
  width: 20%;
  height: 40px;
  border-radius: 24px;
  border: none;
  outline: none;
  background-color: rgb(57,167,176);
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}
.small-box{
  width: 30%;
  height: 100%;
  background: linear-gradient(135deg,rgb(57,167,176),rgb(56,183,145));
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  transition: all 1s;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}
.small-contain{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stitle{
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}
.scontent{
  font-size: 0.8em;
  color: #fff;
  text-align: center;
  padding: 2em 4em;
  line-height: 1.7em;
}
.sbutton{
  width: 60%;
  height: 40px;
  border-radius: 24px;
  border: 1px solid #fff;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.big-box.active{
  left: 0;
  transition: all 2s;
}
.small-box.active{
  left: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  transform: translateX(-100%);
  transition: all 2s;
}
</style>

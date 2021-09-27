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
            <input type="email" placeholder="邮箱" v-model="form.useremail">
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
            <input type="text" placeholder="用户名" v-model="form.username">
            <span class="errTips" v-if="existed">* 用户名已经存在！ *</span>
            <input type="email" placeholder="邮箱" v-model="form.useremail">
            <input type="password" placeholder="密码" v-model="form.password">
          </div>
          <button class="bbutton" @click="register">注册</button>
        </div>
<!--        页面翻转-->
      </div>
      <div class="small-box" :class="{active:isLogin}">
        <div class="small-contain" v-if="isLogin">
          <div class="stitle">欢迎回到我的开心！</div>
          <p class="scontent">如果没有账号，请先注册</p>
          <button class="sbutton" @click="changeType">注册</button>
        </div>
        <div class="small-contain" v-else>
          <div class="stitle">欢迎光临我的开心！</div>
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
      form:{
        username:'',
        useremail:'',
        password:''
      }
    }
  },
  methods:{
    changeType() {
      this.isLogin = !this.isLogin
      this.form.username = ''
      this.form.useremail = ''
      this.form.password = ''
    },
    login() {

      const self = this;
      //此步为跳转，应该在登录后执行，先放在这
      this.$router.push("/index")

      if (self.form.useremail != "" && self.form.password != "") {
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
      } else{
        alert("填写不能为空！");
      }
    },
    register(){
      const self = this;

      //此步为跳转，应该在注册后执行，先放在这
      this.$router.push("/index")

      if(self.form.username != "" && self.form.useremail != "" && self.form.password != ""){
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
      } else {
        alert("填写不能为空！");
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
  height: 40%;
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
  height: 30px;
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

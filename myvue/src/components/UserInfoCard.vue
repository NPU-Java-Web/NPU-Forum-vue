<template>
  <div class="UserInfoCard" v-if="userInfo">
    <div class="top">
      <div class="userInfo">
        <div class="userAvatar" @click="gotoPersonal('post')">
          <img
            :src=" require('../assets/defaultAvatar.jpg')"
            alt=""
          />
        </div>
        <div class="userInfoRight">
          <div class="userName">{{ userInfo.nickName }}</div>
          <div class="email">{{ userInfo.email }}</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="dataCount">
        <span class="dataItem" @click="gotoPersonal('post')"
        >Posts: {{ articleNum }}</span
        >
        <span class="dataItem" @click="gotoPersonal('comment')"
        >Comments: {{ commentNum }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    userId: {
      type: Number,
    },
  },
  data() {
    return {
      // 用户信息
      userInfo: {},
      // 文章数量
      articleNum: 0,
      // 评论数量
      commentNum: 0,
    };
  },
  methods: {
    // 请求
    // 获取用户信息
    async getUserInfoById(id) {
      let res = await this.$request(`/dquser/${id}`);
      // console.log(res);
      this.userInfo = res.data.data;
    },

    // 猫颜(后端接口作者) 说后面会将评论数量和文章数量直接整合到用户信息中，目前暂时先多发两个请求分别获取这两个数据
    // 获取用户的文章数量
    async getUserArticleNum(id) {
      let res = await this.$request(`/number/dqarticlenumbyuserid/${id}`);
      console.log(res);
      this.articleNum = res.data.data;
    },

    // 获取用户的评论数量
    async getUserCommentNum(id) {
      let res = await this.$request(`/number/dqcommentnumbyuserid/${id}`);
      console.log(res);
      this.commentNum = res.data.data;
    },

    // 跳转至个人主页
    gotoPersonal(type) {
      this.$router.push({
        name: "personal",
        params: { id: this.userId },
        query: { type, page: 1 },
      });
    },
  },
  created() {
    // this.getUserInfoById(this.userId);
    // this.getUserArticleNum(this.userId);
    // this.getUserCommentNum(this.userId);
  },
  watch: {},
};
</script>

<style scoped>
.UserInfoCard {
  width: 100%;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  0 10px 10px -5px rgba(0, 0, 0, 0.04);
  margin-bottom: 20px;
  background-color: #fdfdfd;
}

.userAvatar img {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin: 0 15px;
  border: 3px solid #f9f9f9;
  cursor: pointer;
}

.top {
  height: 180px;
  position: relative;
  background: url(../assets/9.jpg) no-repeat;
  background-size: cover;
}

.userInfo {
  display: flex;
  align-items: center;
  font-size: 14px;
  position: absolute;
  top: 50%;
  transform: translateY(-20%);
  color: #f9f9f9;
}

.userName {
  font-size: 15px;
  margin: 5px 0;
}

.dataCount {
  line-height: 70px;
  font-size: 15px;
  text-align: center;
}

.dataItem {
  margin: 0 28px;
  cursor: pointer;
  font-weight: bold;
  color: #333;
}
</style>

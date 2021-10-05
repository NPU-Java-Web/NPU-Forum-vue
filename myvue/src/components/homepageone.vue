<template>
  <div class="right">
    <div class="article">
      <div
        class="articleItem"
        v-for="(item, index) in postsList"
        :key="index"
        @click="
              $router.push({ name: 'posts', params: { postsId: item.postsId } })
            "
      >
        <div class="ItemCenter">
          <div class="title">{{ item.conciseTitle }}</div>
          <div class="publishDate">
            {{ item.updateTime}}
          </div>
          <div
            class="content mdContent"
            v-html="item.conciseContent"
          ></div>
        </div>
        <div class="ItemRight">
          <div class="replyCount">
            <i class="iconfont icon-kuaisuhuifu"></i>
            {{ item.floors }}
          </div>
          <div>
            <i class="el-icon-user"></i>
            {{item.landlordName}}
          </div>
        </div>
      </div>
    </div>
    <GoTop></GoTop>
    </div>

</template>

<script>
import axios from "axios";
import GoTop from "./GoTop";
export default {
  name: "homepageone",
  components:{
    GoTop
  },
  data(){
      return{
        postsList:[],
        category:'',
        eachPage:'',
        pagination:'',
        order:''
    }
  },
  created() {
    this.getInfos()
  },
  methods:{
    getInfos() {
      const self = this;
      self.$axios({
        method:'get',
        url:'/home/1/100/1/1'
      })
      .then(res=>{
        if(res.data.status===200)
        {
          alert(res.data.message)
          this.postsList=res.data.postsList
          this.category=res.data. category
          this.eachPage = res.data.eachPage
          this.pagination = res.data.pagination
          this.order = res.data.order
        }
        else {
          alert(res.data.message)
        }
      })
    }
  }

}
</script>


<style scoped>
.communityContainer {
  display: flex;
  justify-content: center;
  font-size: 15px;
}

.community {
  display: flex;
  max-width: 1200px;
  width: 85vw;
}

.left {
  position: sticky;
  top: 74px;
  padding: 20px 0;
  width: 200px;
  /* 74px+padding上下的20px */
  height: calc(100vh - 114px);
  color: rgb(83, 83, 83);
  font-size: 13px;
}

.right {
  padding: 10px 20px 20px;
  width: calc(100% - 200px);
}

.writeButton {
  width: 100%;
  margin-bottom: 10px;
}

.sortItem {
  margin: 15px 0;
  cursor: pointer;
}

.currentItem {
  color: #18365b;
  font-weight: 600;
}

.articleItem {
  display: flex;
  position: relative;
  border-bottom: 1px solid #eee;
  padding: 20px 20px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.15s;
}

.articleItem:hover {
  background-color: #f2f6fb;
}

.userAvatar {
  width: 45px;
}

.userAvatar img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.ItemCenter {
  width: 700px;
  margin: 0 10px;
}

.ItemCenter div {
  margin-bottom: 1px;
  line-height: 18px;
}

.title {
  color: rgb(43, 43, 43);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.publishDate {
  color: rgb(136, 136, 136);
  margin: 4px 0;
  font-size: 12px;
}

.content {
  color: rgb(136, 136, 136);
  font-size: 14px;
  line-height: 19px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.articleImg {
  margin: 15px 0 10px;
  display: flex;
  justify-content: flex-start;
}

.articleImg img {
  border-radius: 5px;
}

.articleImgItem {
  height: 100px;
  width: auto;
  margin-right: 10px;
}

.articleImgItem /deep/ .el-image__inner {
  width: unset;
}

.ItemRight {
  width: 45px;
  font-size: 14px;
  color: rgb(83, 83, 83);
  position: absolute;
  right: 10px;
}

.tips {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: rgb(158, 158, 158);
  margin: 20px 0;
}

.bottom {
  width: 100%;
  text-align: center;
  margin: 40px 0;
}

.communityContainer /deep/ .el-loading-spinner {
  margin-top: 80px;
}

.nullTips {
  text-align: center;
  margin-top: 20vh;
  color: #666;
  letter-spacing: 1px;
}
</style>

<template>
<!--用$route.params.postsId获得参数-->

  <div class="articleDetailContainer">
    <h1>{{postsId}}</h1>
    <div class="articleDetail">
      <div class="left">
        <div class="card">
<!--          <img :src="articleData.articleImage" alt="" class="coverImg" />-->
          <div class="leftContent">
            <div class="title">
              {{postsTitle}}
            </div>
            <!-- 用户信息 -->
            <div class="author">
              <div class="authorAvatar">
                <img
                  class="avatar"
                  :src="require('../assets/1.jpg')"
                  alt=""
                  lazy
                  fit="cover"
                  @click="gotoPersonal(floorList[0].landlordId)"
                />
              </div>
              <div
                class="authorName"
                @click="gotoPersonal(floorList[0].landlordId)"
              >
                {{ floorList[0].landlordName }}
              </div>
              <div class="publishDate">
                {{ updateTime }}
<!--                <div-->
<!--                  class="updatearticle"-->
<!--                  v-if="articleData.authorId == $store.state.userInfo.userId"-->
<!--                >-->
<!--                  <div @click="isWriteCardShow = true">更新文章</div>-->
<!--                  <div class="fenge">|</div>-->
<!--                  <div @click="deleteCurrentArticle">删除文章</div>-->
<!--                </div>-->
              </div>
            </div>
          </div>
          <!-- 文章内容 -->
          <div class="content detailtContent" v-html="floorList[0].floorContent"></div>
<!--          <div class="commentControl">-->
<!--            <div-->
<!--              class="commentControlItem"-->
<!--              :class="isUserLike ? 'controlItemDone' : ''"-->
<!--              @click="likeCurrentArticle(!isUserLike)"-->
<!--            >-->
<!--              <i class="iconfont icon-dianzan"></i>-->
<!--              {{ (isUserLike ? "已点赞" : "点赞") + "  " + this.likeCount }}-->
<!--            </div>-->
<!--            <div class="likeUsersAvatar">-->
<!--              <img-->
<!--                v-for="(item, index) in likeUserList"-->
<!--                :key="index"-->
<!--                :src="-->
<!--                  item.avatar && item.avatar != ''-->
<!--                    ? item.avatar-->
<!--                    : require('assets/img/defaultAvatar.jpg')-->
<!--                "-->
<!--                fit="cover"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
        </div>
        <div class="card leftContent commentArea">
          <!-- 评论区 -->
          <comment-area
            :commentData="commentData"
            :floorCommentList="floorCommentList"
            :currentPage="currentCommentPage"
            @reFreshComment="({ type, index }) => reFreshComment(type, index)"
            @getFloorCommentList="({ id, index }) => getFloorComment(id, index)"
            @changePage="changeCommentPage"
          ></comment-area>
        </div>
      </div>
<!--      <div class="right">-->
<!--        &lt;!&ndash; 用户信息卡片 &ndash;&gt;-->
<!--        <user-info-card :userId="articleData.authorId"></user-info-card>-->
<!--        <positioning-card></positioning-card>-->
<!--      </div>-->
    </div>
  </div>

</template>

<script>
export default {
  name: "posts",
  data(){
    return{
      postsId:this.$route.params.postsId,
      category:'',
      postsTitle:'',
      views:'',
      floors:'',
      updateTime:'',
      eachPage:'',
      pagination:'',
      order:'',
      floorList:[]
    }
  },
  created() {
    this.getposts()
  },
  methods:{
    getposts(){
      const self = this
      let url ='/posts/'+this.postsId+'/100/1/1'
      self.$axios({
        method:'get',
        url:url
      })
      .then(res=>{
        if(res.data.status===200)
        {
          alert(res.data.message)
          this.floorList=res.data.floorList
          this.postsTitle=res.data.postsTitle
          this.category = res.data.category
          this.views = res.data.views
          this.floors= res.data.floors
          this.updateTime = res.data.updateTime
          this.eachPage = res.data.eachPage
          this.pagination = res.data.pagination
          this.order = res.data.order
        }
        else{
          alert(res.data.message)
        }
      })

    },
    //跳转到个人页面
    gotoPersonal(id){
      this.$router.push({
        name:'personal',
        params:{id:id}
      })
    }
  }
}
</script>

<style scoped>
.articleDetailContainer {
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
}

.articleDetail {
  display: flex;
  max-width: 1200px;
  width: 90vw;
  padding: 40px 0;
}

.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
}

.left {
  flex: 1;
  margin: 0 20px;
}

.card {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  background: #fdfdfd;
  border-radius: 10px;
  margin-bottom: 30px;
}

.leftContent {
  padding: 30px 30px 0px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.right {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 90px;
  width: 325px;
  height: 550px;
}

.title {
  font-weight: bold;
  font-size: 28px;
  line-height: 37px;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.author {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.authorName {
  color: #4480c9;
  cursor: pointer;
  margin: 0 20px 0 10px;
}

.publishDate {
  font-size: 13px;
  color: rgb(136, 136, 136);
  position: relative;
  flex: 1;
}

.updatearticle {
  position: absolute;
  right: 0;
  top: 0px;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
  display: flex;
}

.updatearticle .fenge {
  margin: 0 10px;
  color: #ccc;
}

.content {
  font-size: 15px;
  color: #111;
  line-height: 23px;
  word-break: break-all;
  margin-bottom: 20px;
  padding: 0 30px;
  max-width: 850px;
  box-sizing: border-box;
}

.commentControl {
  margin: 30px 30px 35px;
  padding: 20px 0px 0;
  box-sizing: border-box;
  display: flex;
  position: relative;
  border-top: 1px solid #eee;
}


.commentControlItem {
  padding: 13px 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  color: #666;
  font-weight: bold;
  // border: 1px solid #eee;
  font-size: 14px;
  letter-spacing: 1px;
  background-color: #f8f8f8;
  box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
  inset 2px 2px 4px rgba(255, 255, 255, 0.1), 2px 2px 8px rgba(0, 0, 0, 0.15);
}

.commentControlItem:hover {
  box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
    inset -2px -2px 12px rgba(255, 255, 255, 0.5),
  inset 2px 2px 4px rgba(255, 255, 255, 0.1),
  inset 2px 2px 8px rgba(0, 0, 0, 0.15);
}

.likeUsersAvatar {
  position: absolute;
  right: 0px;
}

.likeUsersAvatar img {
  position: absolute;
  right: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.likeUsersAvatar img:nth-child(1) {
  z-index: 3;
}

.likeUsersAvatar img:nth-child(2) {
  z-index: 2;
  right: 21px;
}

.likeUsersAvatar img:nth-child(3) {
  z-index: 1;
  right: 42px;
}

.coverImg {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>

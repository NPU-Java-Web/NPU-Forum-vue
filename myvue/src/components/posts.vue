<template>
<!--用$route.params.postsId获得参数-->

  <div class="articleDetailContainer">

    <div class="articleDetail">
      <div class="left">
        <div class="card">
          <img :src="require('../assets/background.jpg')" alt="" class="coverImg" />
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
                  @click="gotoPersonal(userId)"
                />
              </div>
              <div
                class="authorName"
                @click="gotoPersonal(userId)"
              >
                {{ nickname }}
              </div>
              <div class="publishDate">
                {{ updateTime }}
                <div
                  class="updatearticle"
                  v-if="this.userId === this.thisId"
                >
                  <div class="fenge">|</div>
                  <div @click="deleteCurrentArticle">删除文章</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 文章内容 -->
          <div class="content detailtContent" v-html="contents"></div>
          <div class="commentControl">
            <div
              class="commentControlItem"
              :class="isUserLike ? 'controlItemDone' : ''"
              @click="likeCurrentArticle(!isUserLike)"
            >
              <i class="iconfont icon-dianzan"></i>
              {{ (likes ? "已点赞" : "点赞") + "  " + this.likes }}
            </div>
            <div class="likeUsersAvatar">
<!--              <img-->
<!--                v-for="(item, index) in likeUserList"-->
<!--                :key="index"-->
<!--                :src="-->
<!--                  item.avatar && item.avatar != ''-->
<!--                    ? item.avatar-->
<!--                    : require('../assets/3.jpg')-->
<!--                "-->
<!--                fit="cover"-->
<!--              />-->
            </div>
          </div>
        </div>
                            <div class="card leftContent commentArea">
                              <!-- 评论区 -->

                              <div class="commentArea">
                                <div class="commentText">
                                  评论区 ({{ this.floorList.length ? this.floorList.length : 0 }})
                                </div>
                                <div class="commentInput">
                                  <el-input
                                    type="textarea"
                                    class="commentTextArea"
                                    maxlength="140"
                                    show-word-limit
                                    v-model="newCommentData.content"
                                    placeholder="留下你的评论"
                                  ></el-input>
                                  <div class="submitCommentButton">
                                    <el-button
                                      size="mini"
                                      round
                                      @click="submitComment"
                                      class="submitComment"
                                      type="primary"
                                    >评论</el-button
                                    >
                                  </div>
                                </div>
                                <div
                                  class="commentItem"
                                  v-for="(item, index) in floorList"
                                  :key="index"
                                >
                                  <div class="commentItemContainer" >
                                    <div class="commentItemArea">
                                      <div class="userAvatar">
                                        <!-- :src="item.commentUserAvatar" -->
                                        <img
                                          class="avatar"
                                          :src="require('../assets/defaultAvatar.jpg') "
                                          alt=""
                                        />
                                      </div>
                                      <div class="commentInfo">
                                        <div class="author userInfo">
                                          <div
                                            class="authorName userNickName"
                                            @click="gotoPersonal(item.floorId)"
                                          >
                                            {{ item.nickname }}
                                          </div>
                                        </div>
                                        <div class="commentContent">
                                          {{ item.content }}
                                        </div>
                                        <!-- 评论控制区 -->
                                        <div class="commentContorl">
                                          <div class="publishDate commentDate">
                                            {{ item.createTime }}
                                          </div>
                                          <div class="commentContorlArea">
                                            <div
                                              class="commentContorlItem checkReply"
                                              v-if="
                                        item.commentList.length === 0
                                      "
                                            >

                                            </div>

                                            <div class="commentContorlItem" @click="unlikeFloor(item.floorId,index)" v-if=item.likes>
                                              <i class="el-icon-star-on"> {{item.likes}}</i>
                                            </div>
                                            <div class="commentContorlItem" @click="likeFloor(item.floorId,index)" v-else>
                                              <i class="el-icon-star-on"> {{item.likes}}</i>
                                            </div>

                                            <div class="commentContorlItem">
                                              <i class="el-icon-check"></i>
                                            </div>
                                            <div
                                              class="commentContorlItem"
                                              @click="
                                        replyCurrentComment(
                                          item.floorId,
                                         item.nickname,
                                         1
                                        )
                                      "
                                            >
                                              <i class="el-icon-chat-dot-round"></i>
                                            </div>
                                            <div
                                              v-if="item.userId === thisId"
                                              class="commentContorlItem"
                                              @click="
                                        deleteCurrentCommentFloor(item.floorId)
                                      "
                                            >
                                              <i class="el-icon-delete-solid"></i>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                    <!--                 楼层评论-->

                                    <div
                                      class="floorComment"
                                      v-if="item.commentList[0] && item.commentList[0].commentId"
                                    >
                                      <div
                                        class="floorCommentItemContainer"
                                        v-for="(i, idx) in item.commentList"
                                        :key="idx"
                                      >
                                        <div class="floorCommentItem">
                                          <div
                                            class="floorCommentUser"
                                            @click="gotoPersonal(i.userId)"
                                          >
                                            {{ i.nickname }}:&nbsp;
                                          </div>
                                          <div class="floorCommentContent">
                                            {{ i.content }}
                                          </div>
                                          <div class="replyBtn">
                    <!--                        <div-->
                    <!--                          class=""-->
                    <!--                          @click="-->
                    <!--                    replyCurrentComment(-->
                    <!--                      i.commentId,-->
                    <!--                      i.commentUserNickName,-->
                    <!--                      index-->
                    <!--                    )-->
                    <!--                  "-->
                    <!--                        >-->
                    <!--                          回复-->
                    <!--                        </div>-->
                                            <div
                                              v-if="i.userId === thisId"
                                              @click="
                                        deleteCurrentComment(i.commentId)
                                      "
                                            >
                                              删除
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>


                                  </div>
                                </div>
                              </div>

                            </div>
      </div>
      <div class="right">
        <!-- 用户信息卡片 -->
        <user-info-card :userId="thisId"></user-info-card>
      </div>
    </div>
    <GoTop></GoTop>
  </div>

</template>

<script>
import UserInfoCard from "./UserInfoCard";
import GoTop from "./GoTop";
export default {
  name: "posts",
  components: {
    UserInfoCard,
    GoTop
  },
  data() {
    return {
      // 发表评论数据
      newCommentData: {
        content: "",
        replyId: 0,
        articleId: this.$route.params.postsId,
      },
      postLikedFlag:0,

      // 楼层回复时commentInput的初始长度和初始值
      floorCommentOriginData: {
        length: 0,
        value: "",
        rootIndex: 0,
      },

      //当前用户id
      thisId: this.$store.state.localid,
      //从url获得文章id
      postsId: this.$route.params.postsId,
      title:'',
      contents:'',
      userId:'',
      nickname:"",
      likes:'',
      category: '',
      postsTitle: '',
      views: '',
      floors: '',
      updateTime: '',
      eachPage: '',
      pagination: '',
      order: '',
      floorList: [],
      floorLikeFlag:[],
      floorNumber: '',
      floorId:'',

    }
  },
  created() {
    this.getposts()
  },
  methods: {
    //初始化页面
    getposts() {

      const self = this
     // let url = '/posts/' + this.postsId + '/100/1/1'
      //size为楼层数量
      let url = "post/"+ this.postsId+"?size=100&page=1&order=1"
      self.$axios({
        method: 'get',
        url: url
      })
        .then(res => {
          if (res.data.flag === true) {
          //  alert(res.data.message)
            this.floorList = res.data.data.floorList
            this.contents = res.data.data.content
            this.userId = res.data.data.userId
            this.nickname = res.data.data.nickname
            this.likes = res.data.data.likes
            this.postsTitle = res.data.data.title
            this.category = res.data.data.category
            this.views = res.data.data.views
            this.floors = res.data.floors
            this.updateTime = res.data.data.updateTime
            this.eachPage = res.data.eachPage
            this.pagination = res.data.pagination
            this.order = res.data.order
            console.log(res)
            if( this.likes===0){
              this.postLikedFlag =true
            }
          else {
              this.postLikedFlag =true
            }

          } else {
            alert(res.data.message)
            alert(res.data.data)
            console.log(res)
          }
        })

    },
    //跳转到个人页面
    gotoPersonal(id) {
      this.$router.push({
        name: 'personal',
        params: {id: id}
      })
    },
    //发新楼层+新评论
    submitComment() {
      const self = this
      //alert("aa")

      //alert(self.floorCommentOriginData.rootIndex)
      if(self.floorCommentOriginData.rootIndex===0){

        if (self.$store.state.localid !== '' && self.$store.state.localid !== undefined) {

          self.$axios({
            method: 'post',
            url: 'post/floor',
            data: {
             postId:self.postsId,
              content: self.newCommentData.content
             //  postId : "13",
             //  content:"aaa"
            }
          })
            .then(res => {
              console.log(res)
              if (res.data.flag === true) {
                //self.floorId = res.data.data.floorId
                //self.floorNumber = res.data.data.floorNumber
                //console.log(res)
               // alert(res.data.message)
             //   alert(self.floorCommentOriginData.rootIndex)
                // 重置所有数据
                this.newCommentData = {
                  content: "",
                  replyId: 0,
                  articleId: self.$route.params.id,
                };
                this.floorCommentOriginData = {
                  length: 0,
                  value: "",

                  rootIndex:0


                };

                this.getposts()
              }
              else {
                //console.log(res)
              }

            })
        } else {
          alert("未登录无法发布评论，请先登录")

        }
      }
      else if(self.floorCommentOriginData.rootIndex===1){
       // alert("this")
        if (self.$store.state.localid !== '' && self.$store.state.localid !== undefined) {
          self.$axios({
            method: 'post',
            url: 'post/comment',
            data: {
              floorId: self.newCommentData.replyId,
              content: self.newCommentData.content
            }
          })
            .then(res => {
              console.log(res)
              if (res.data.flag === true) {
               // console.log(res)
              //  alert(res.data.message)

                // 重置所有数据
                this.newCommentData = {
                  content: "",
                  replyId: 0,
                  articleId: this.$route.params.id,
                };
                this.floorCommentOriginData = {
                  length: 0,
                  value: "",

                  rootIndex:0


                };

                this.getposts()
              }

            })
        } else {
          alert("未登录无法发布评论，请先登录")

        }
      }
      else{
        alert("wrong")
      }

    },
    //删除楼层
    deleteCurrentCommentFloor(id) {
      const self = this
      self.$axios({
        method: 'delete',
        url: 'post/floor/' + id
      })
        .then(res => {
          if (res.data.flag === true) {
            alert("删除楼层成功")
            console.log(res)
            this.getposts()
          } else {
            console.log(res)
            alert(res.data.message)
          }
        })
    },
    //删除评论
    deleteCurrentComment(id) {
      const self = this
      self.$axios({
        method: 'delete',
        url: 'post/comment/' + id
      })
        .then(res => {
          if (res.data.flag=== true) {
            alert("删除评论成功")
            console.log(res)
            this.getposts()
          } else {
            console.log(res)
            alert(res.data.message)
          }
        })
    },
    replyCurrentComment(id, name, index) {

      if (this.$store.state.localid !== '' && this.$store.state.localid !== null) {
        this.newCommentData.replyId = id;
        this.newCommentData.content = `@${name}: `;
        // 记录当前长度
        this.floorCommentOriginData.length = this.newCommentData.content.length;
        this.floorCommentOriginData.value = this.newCommentData.content;
        this.floorCommentOriginData.rootIndex = index;

        // 滚动到评论框 并让评论框获取焦点
        this.scrollToCommentInput();
      } else {
        alert("登录后才能评论哦!")
      }
    },
    // 滚动到评论框
    scrollToCommentInput() {
      let commentArea = document.querySelector(".commentArea");
      // console.log(commentArea.offsetTop);
      // 减去顶部栏高度和20px的间距
      window.scrollTo({
        top: commentArea.offsetTop - 94,
        behavior: "smooth",
      });

      let input = document.querySelector(".commentTextArea");
      // 阻止focus定位
      input.children[0].focus({ preventScroll: true });
    },
    deleteCurrentArticle(){
      const self = this
      self.$axios({
        method: 'delete',
        url: 'post/' + this.postsId
      })
        .then(res => {
          if (res.data.flag === true) {
            alert("删除帖子成功")
            console.log(res)
            this.$router.push('/homepageone?typeId='+"1"+'&page=1');
          } else {
            console.log(res)
            alert(res.data.message)
          }
        })
    },
    likeCurrentArticle(){
      const self = this
      self.$axios({
        method: 'post',
        url: 'post/like/' + this.postsId
      })
        .then(res => {
          if (res.data.flag === true) {

            console.log(res)

          } else {
            console.log(res)
            alert(res.data.message)
          }
        })
    },
    dislikeCurrentArticle(){
      const self = this
      self.$axios({
        method: 'delete',
        url: 'post/like/' + this.postsId
      })
        .then(res => {
          if (res.data.flag === true) {

            console.log(res)

          } else {
            console.log(res)
            alert(res.data.message)
          }
        })
    },
    unlikeFloor(floorId){
      this.$axios({
        method:'delete',
        //url此处还要修改
        url: 'post/floor/like/'+this.floorId
      })
        .then( res => {
          if(res.data.flag===true)
          {
            this.floorLikeFlag[index]=false;
          }
          else {
            this.floorLikeFlag[index]=true;
          }
        })
        .catch( err => {
          console.log(err);
        })
    },
    likeFloor(floorId,index){
      this.$axios({
        method:'post',
        //url此处还要修改
        url: 'post/floor/like/'+this.floorId
      })
        .then( res => {
          if(res.data.flag===true)
          {
            this.floorLikeFlag[index]=true;
          }
          else {
            this.floorLikeFlag[index]=false;
          }
        })
        .catch( err => {
          console.log(err);
        })
    },


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


.commentContent {
  font-size: 15px;
  color: #111;
  line-height: 23px;
  word-break: break-all;
}

.commentText {
  font-size: 18px;
  font-weight: 600;
  color: rgb(44, 44, 44);
  margin-bottom: 15px;
}

.commentItem {
  margin: 10px 0 30px;
}

.commentInfo {
  width: 100%;
}

.commentItemArea {
  display: flex;
  margin: 10px 0 10px;
}

.userAvatar {
  width: 50px;
  margin-right: 15px;
}

.userAvatar .avatar {
  width: 45px;
  height: 45px;
}

.userInfo {
  margin: 4px 0;
  flex: 1;
}

.commentContent {
  font-size: 14px;
}

.contentImg {
  margin: 20px 0;
}

.commentContorl {
  position: relative;
  color: rgb(136, 136, 136);
  width: 100%;
}

.commentContorlArea {
  display: flex;
  position: absolute;
  right: 10px;
  top: -5px;
  align-items: center;
}

.commentContorlItem {
  margin: 1px 0px 1px 10px;
}

.commentContorlItem i {
  cursor: pointer;
}

.floorComment {
  font-size: 15px;
  color: #111;
  line-height: 23px;
  background-color: #efefef;
  border-radius: 10px;
  font-size: 14px;
  margin-left: 60px;
  overflow: hidden;
}

.floorCommentItem {
  display: flex;
  padding: 2px 20px;
  position: relative;
}

.floorCommentItemContainer:nth-child(1) .floorCommentItem {
  margin-top: 10px;
}

.floorCommentItemContainer:last-child .floorCommentItem {
  margin-bottom: 10px;
}

.floorCommentUser,
.repliedUser {
  color: #4480c9;
  cursor: pointer;
}

.replyBtn {
  color: rgb(148, 148, 148);
  position: absolute;
  right: 20px;
  font-size: 13px;
  cursor: pointer;
  display: none;
}

.replyBtn div {
  margin-left: 10px;
}

.floorCommentItem:hover .replyBtn {
  display: flex;
}

.repliedUser {
  color: rgb(148, 148, 148);
}

.commentTextArea /deep/ textarea {
  resize: none;
  height: 100px;
  border-color: #ccc;
  line-height: 23px;
}

.submitCommentButton {
  margin-top: 15px;
  text-align: right;
}

.authorName {
  color: #4480c9;
  font-size: 15px;
}

.publishDate {
  font-size: 13px;
  color: rgb(136, 136, 136);
  margin: 4px 0;
}

.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.checkReply {
  font-size: 14px;
  color: #8590a6;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
}

.checkReply:hover {
  color: #76839b;
}

.userNickName {
  cursor: pointer;
}

.bottom {
  width: 100%;
  display: flex;
  justify-content: center;
}

.el-pagination {
  margin-bottom: 20px;
}

.commentInput {
  margin-bottom: 20px;
}
</style>

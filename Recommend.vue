<template>
  <div style="background-color: #fafafa;">
    <div class="container">
      <div class="main1">
        <div style="width: 996px;height: 56px;border-bottom: 0.01px solid rgb(219, 219, 219);">
          <h4 style="float: left;margin: 10px 10px;width: 32px;height: 56px;">推荐</h4>
          <a href="" style="float: right;width: 70px;height: 40px;padding: 10px 10px;">
            <img src="../assets/排行榜.png" alt="" style="float: left;">
            <p style="color: #9a9aaa;text-decoration: none;">排行榜</p>
          </a>
        </div>
        <!-- 文章 -->
        <!-- // :href="`/detail/${item.id}`" -->
        <div
        v-for="item in articles"
        :key="item.id"
        @click="$router.push(`/detail/${item.id}`)"
        style="width:996px;height: 142px;border-bottom: 0.01px solid rgb(219, 219, 219);"
        id="xbox">
          <div style="width: 996px;height: 102px;padding: 20px 0 20px 0;">
            <div style="width: 178px;height: 100px;float: left;margin-right: 16px;padding-top: 2px;">
              <div href="" style="width: 178px;height: 100px;"><img src="../assets/前端.png" alt=""></div>
            </div>
            <div style="width: 802px;height: 102px;float: left;">
              <div style="width: 802px;height: 71px;">
                <p class="ycsl2" style="width: 802px;height: 25px;">{{item.stem}}</p>
                <p class="ycsl2" style="width: 802px;height: 42px;margin-top: 4px;">{{item.content}}</p>
              </div>
              <div style="width: 802px;height: 21px;margin-top: 10px;float: left;">
                <div style="width: 70px;height: 20px;float: left;">
                  <img src="../assets/点赞前.png" alt="" style="width: 16px;height: 16px;">{{item.likeCount}}赞
                </div>
                <div style="width: 70px;height: 20px;float: left;">
                  <img src="../assets/踩前.png" alt="" style="width: 16px;height: 16px;">踩
                </div>
                <div style="height: 20px;float: left;">
                  作者：{{ item.creatorName }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RecommendPage',
  components: {
  },
  data () {
    return {
      articles: []
    }
  },
  async created () {
    const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
    this.articles = res.data.result.rows
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.container{
  position: relative;
  top: 50px;
  width: 1383px;
  height: 2000px;
  margin:0 auto;
  background-color: #ffffff;
}
.header{
  position: relative;
  top: 70px;
  margin:0 auto;
  width: 1383px;
  height: 400px;
  background-color: #fafafa;
}
.header1{
  width: 420px;
  height: 400px;
  float: left;
}
.header2{
  width: 304px;
  height: 400px;
  float: left;
}
.header3{
  width: 304px;
  height: 400px;
  float: left;
}
.header4{
  width: 338px;
  height: 400px;
  margin-left: 10px;
  float: right ;
  border: 0.01px solid rgb(227, 227, 227);
}

.ycsl2{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
    width: 200px;
    cursor: pointer
}

.main1{
  width: 996px;
  height: 4737px;
  float: left;
}
.main2{
  width: 338px;
  height: 4737px;
  float: right;
  background-color: antiquewhite;
}

#xbox:hover{
  background-color: #fafafa;
}
</style>

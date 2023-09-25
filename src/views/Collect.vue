<template>
  <div style="background-color: #fafafa;">
    <div class="container">
      <div class="main1">
        <div style="width: 1096px;height: 56px;border-bottom: 0.01px solid rgb(219, 219, 219);">
          <h2 style="float: left;margin: 10px 10px;width: 56px;height: 56px;">收藏</h2>
          <div href="" style="float: right;width: 70px;height: 40px;padding: 10px 10px;">
            <p style="color: #9a9aaa;text-decoration: none;">时间</p>
          </div>
        </div>
        <!-- 文章 -->
        <!-- // :href="`/detail/${item.id}`" -->
        <div v-for="item in articles"
          :key="item.id"
          @click="$router.push(`/detail/${item.id}`)"
          id="xbox"
          style="width: 1096px;height: 142px;border: 0.01px solid rgb(219, 219, 219);">
          <div style="width:996px;height: 142px;border: 0.01px solid rgb(219, 219, 219);">
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
          <div style="width: 80px;height: 142px;float: right;position: relative;bottom: 90px;">11月11日 <br> 11点11分</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CollectPage',
  async created () {
    if (this.$store.state.log !== 1) {
      alert('请先登录')
      this.$router.push('/logon')
    }
    const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
    this.articles = res.data.result.rows
  },
  data () {
    return {
      articles: []
    }
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
  width: 1243px;
  height: 2000px;
  margin:0 auto;
  background-color: #ffffff;
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
  width: 1096px;
  height: 4737px;
  float: left;
  margin: 0 auto;
  padding: 0 70px;
}

#xbox:hover{
  background-color: #fafafa;
}
</style>

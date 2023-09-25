<template>
    <div style="background-color: red;">
      <div style="width: 1670px;margin: 0 auto;position: relative;top: 5px;">

        <div style="width: 300px;height: 580px;float: left;">
          <div style="width: 300px;height: 295px;padding-bottom: 10px;margin-bottom: 8px;background-color: white;;"></div>
          <div style="width: 300px;height: 48px;margin-bottom: 8px;background-color: white;"></div>
          <div style="width: 300px;height: 186px;background-color: white;"></div>
        </div>

        <div class="article-detail-page" v-if="article.id">
          <!-- <nav class="nav"><span @click="$router.back()" class="back">&lt;</span> 面经详情</nav> -->
          <header class="header">
            <h1>{{article.stem}}</h1>
            <p>{{article.createdAt}} | {{article.views}} 浏览量 | 44 点赞数</p>
            <p>
              <img
                src="{{}}"
                alt=""
              />
              <span>{{article.creatorName}}</span>
            </p>
          </header>
          <main class="body">
            {{article.content}}
          </main>
        </div>

        <div style="width: 300px;height: 674px;float: right;">
          <div style="width: 300px;height: 455px;margin-bottom: 8px;background-color: white;"></div>
          <div style="width: 300px;height: 186px;background-color: white;"></div>
        </div>

      </div>
    </div>

  </template>

<script>
// 请求地址: https://mock.boxuegu.com/mock/3083/articles/:id
// 请求方式: get
import axios from 'axios'
export default {
  name: 'ArticleDetailPage',
  data () {
    return {
      article: {}
    }
  },
  async created () {
    const id = this.$route.params.id
    const { data } = await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${id}`)
    this.article = data.result
    console.log(this.article)
  }

}
</script>

  <style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .article-detail-page {
    width: 1010px;
    height: 10000px;
    text-align: center;
    margin: 0 auto;
    padding: 0 24px;
    background-color: white;
    // .nav {
    //   height: 44px;
    //   border-bottom: 1px solid #e4e4e4;
    //   line-height: 44px;
    //   text-align: center;
    //   .back {
    //     font-size: 18px;
    //     color: #666;
    //     position: absolute;
    //     left: 10px;
    //     top: 0;
    //     transform: scale(1, 1.5);
    //   }
    // }
    .header {
      padding: 0 15px;
      p {
        color: #999;
        font-size: 12px;
        display: flex;
        align-items: center;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .body {
      padding: 0 15px;
    }
  }
  </style>

<template>
  <div class="h5-wrapper">
    <div style="position: relative;
    z-index:10;top: 0;
    width: 100%;
    height: 50px;
    background-color: white;">
      <nav class="tabber">
          <div style="margin-left: 50px;"><img src="https://img2.baidu.com/it/u=3028008368,3839988964&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" class="logo"></div>
          <router-link to="/home" style="margin-left: 50px;">首页</router-link>
          <router-link to="/recommend">推荐</router-link>
          <router-link to="/news">新闻</router-link>
          <router-link to="/study">学习</router-link>
          <div class="inputdiv"><input type="text" class="input" placeholder="请输入您想搜索的内容"><button class="inputbtn">搜索</button></div>
          <router-link to="/logon">登录</router-link>
          <router-link to="/collect">收藏</router-link>
          <router-link to="/history">历史</router-link>
          <router-link to="/creat" style="margin-right: 100px;">创作</router-link>
      </nav>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage',
  data () {
    return {
      log: false
    }
  },
  methods: {
    sada () {
      this.log = true
    },
    notlogon () {
      this.log = false
    }
  }
}
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    background-color: #ffffff;
}
</style>
<style lang="less" scoped>
.h5-wrapper{
    .content{
    margin-bottom: 51px;
}
.tabber{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    background-color: white;
    border-top: 1px solid #e4e4e4;
    a{
        flex: 1;
        text-decoration: none;
        font-size: 20px;
        color: #333;
        -webkit-tap-highlight-color: transparent;
    }
    a:hover{
        background-color: #e4e4e4;
        color: black;
    }
    a.router-link-active{
        // border-top: 3px solid red;
        background-color: rgb(252, 26, 26);
        color: white;
    }

}

    .logo{
        height: 50px;
    }
    .inputdiv{
        margin: 0 auto;
    }
    .input{
        border: 1px solid;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        width: 300px;
        height: 35px;
    }
    .inputbtn{
        position: relative;
        top: 4px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        font-size: 20px;
        width: 80px;
        height: 39px;
        color: white;
        background-color: rgb(255, 92, 5);
    }

}
</style>

<template>
  <div style="background-color: #f3f4f6;">
    <!-- 个人中心 -->
    <div v-if="log" style="width: 1554px;height: 1010px;background-color: #f3f4f6;margin: 0 auto;">
<!-- 头部 -->
      <div style="width: 1554px;height: 265px;">
        <div style="width: 1320px;height: 84px;padding-top: 16px;margin: 0 117px;"></div>
        <div style="width: 1280px;height: 165px;padding-left: 16px;padding-right: 24px;margin: 0 117px;background-color: #ffffff;">

          <div style="width: 1280px;height: 90px;">

            <div style="width: 102px;height: 90px;float: left;">
              <div style="width: 94px;height: 94px;border: 4px none ;position: relative;top: -12px;background-color: #ffffff;">
                <img src="../assets/未登录.png" alt="" class="logimg">
              </div>
            </div>

            <div style="width: 1162px;height: 90px;margin-left: 16px;float: left;">
              <div style="width: 1162px;height: 32px;margin-top: 16px;">
                <div style="width: 187px;height: 24px;float: left;">name</div>
                <div style="width: 336px;height: 32px;margin-left: 639px;float: right;">
                  <div style="width: 336px;height: 32px;">
                    <button>设置</button>
                  </div>
                </div>
              </div>
              <div style="width: 1162px;height: 24px;margin-top: 10px;float: right;">
              <ul style="width: 1162px;height: 24px;text-decoration: none;float: left;">
              <li style="width: 33px;height: 24px;float: left;"></li>
              <li style="width: 93px;height: 24px;float: left;">原创</li>
              <li style="width: 93px;height: 24px;float: left;">排名</li>
              <li style="width: 93px;height: 24px;float: left;">粉丝</li>
              </ul>
            </div>
            </div>

          </div>

          <div style="width: 1162px;height: 75px;padding-left: 118px;">
              <div style="width: 1162px;height: 20px;margin-bottom: 10px;">IP属地：</div>
              <div style="width: 1162px;height: 21px;padding-bottom: 24px;">查看详细资料</div>
            </div>

        </div>
      </div>
<!-- 主体 -->
      <div style="width: 1554px;height: 735px;">
        <div style="width: 1320px;height: 703px;padding-bottom: 32px;margin: 0 auto;margin-top: 10px;">
<!-- main1 -->
          <div style="width: 338px;height: 703px;margin-right: 10px;float: left;">

            <div style="width: 322px;height: 48px;padding-left: 16px;border-bottom: 0.01px solid rgb(219, 219, 219);background-color: #ffffff">原力等级</div>
            <div style="width: 306px;height: 48px;padding: 16px;background-color: #ffffff;margin-bottom: 10px;"></div>

            <div style="width: 322px;height: 153px;padding: 8px;margin-bottom: 10px;background-color: #ffffff;">
              <div style="width: 302px;height: 18px;padding: 16px 10px;">博客之星</div>
              <div style="width: 306px;height: 79px;padding: 16px 8px 8px 8px;">
                <p style="width: 306px;height: 21px;margin-top: 10px;text-align: center;">距离入围还差  篇</p>
                <div @click="$router.push(`/creat`)" style="width: 304px;height: 30px;border: 0.6px none;margin: 0 auto; margin-top: 16px;background-color: rgb(255, 92, 5);color: #ffffff;text-align: center;border-radius: 25px;"><p>去创作</p></div>
              </div>
            </div>

            <div style="width: 322px;height: 48px;padding-left: 16px;border-bottom: 0.01px solid rgb(219, 219, 219);background-color: #ffffff;"><p style="padding-top: 13px;">个人成就</p></div>
            <div style="width: 306px;height: 116px;padding: 16px;background-color: #ffffff;margin-bottom: 10px;"></div>

          </div>
<!-- main2 -->
          <div style="width: 972px;height: 703px;background-color: #ffffff;float: left;">

            <div style="width: 956px;height: 48px;padding-right: 16px;border-bottom: 0.01px solid rgb(219, 219, 219);">
              <p>最近 文章</p>
            </div>

            <div style="width: 924px;height: 607px;padding: 24px;">

              <div style="width: 924px;height: 227px;">
                <div @click="$router.push(`/creat`)" style="width: 304px;height: 30px;border: 0.6px none;margin: 0 auto; margin-top: 16px;background-color: rgb(255, 92, 5);color: #ffffff;text-align: center;border-radius: 25px;"><p>写博客</p></div>
              </div>

              <div style="width: 934px;height: 364px;margin-top: 16px;">
                <div style="width: 924px;height: 24px;"></div>
                <div style="width: 940px;height: 324px;margin-top: 16px;margin-left: -8px;margin-right: -8px;"></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- 登录 -->
    <!--  id="building" -->
    <div v-else style="width: 100%;height: 100%;margin: 0 auto;">
      <video data-v-cd0725ea="" autoplay="autoplay" muted="muted" loop="loop" src="@/assets/hutao.mp4" style="width: 100%;position: fixed;"></video>
        <form action="">
          <div class="log">
              <div class="login">
                  <li><p style="">登录可享更多权益！</p></li>
                  <li><input type="username" placeholder="请输入账号"></li>
                  <li><input type="password" placeholder="请输入密码"></li>
                  <li><input type="submit" value="登录" method="post" action="/Lonon" style="width: 420px;text-align: center;height: 40px;margin-top: 30px;border-radius: 15px;font-size: 18px;background-color: rgb(16, 23, 63);color:white"></li>
                  <li><input type="submit" value="注册" method="post" action="/Lonon" style="width: 420px;text-align: center;height: 40px;margin-top: 30px;border-radius: 15px;font-size: 18px;background-color: rgb(16, 23, 63);color:white"></li>
              </div>
          </div>
        </form>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'LagonPage',
  data () {
    return {
      log: store.state.log
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
#building{
  background:url("https://pic2.zhimg.com/v2-ffde7ff5e016b8481b8449ddaf9d6ceb_1440w.jpg?source=172ae18b");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
}

ul li{
  list-style: none;
}
  .log{
        margin: 0 auto;
        position: fixed;
        margin-top: 20px;
        top: 50%;
        left: 30%;
        transform: translate(-50%, -50%);
        /* background: rgb(0, 0, 0,0.1); */
        width: 500px;
        height: 500px;
        border: 0px solid;
    }
    .login{
        margin: 0px auto;
        margin-top: 25px;
        margin-bottom: 25px;
        padding: 5px;
        width: 450px;
        height: 450px;
        background: rgb(0, 0, 0,0.1);
        border-radius: 5px;
    }
    .login li{
        margin: 20px auto;
        list-style: none;
        width: 100%;
        height: 30px;
        padding: 15px;
    }
    .login li input{
        margin: 20px auto;
        margin-bottom: 50px;
        width: 420px;
        height: 49px;
        border-radius: 10px;
        font-size: 17px;
        background-color: gery;
    }
    .login li p{
      width: 100%;
      text-align: center;
      font-size: 30px;
      color: white;
      margin-top: 10px;
      text-align: center;
    }
    .logimg{
      width: 94px;
      height: 94px;
      border-radius: 100px;
      background-color: aliceblue;
    }
</style>

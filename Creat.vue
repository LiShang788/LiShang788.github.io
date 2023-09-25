<template>
<div style="background-color: #fafafa;">
    <div class="container">
      <header class="header">
        <h1>创作!!!</h1>
      </header>
      <main class="main">
        <div class="editor">
          <h2>编辑器</h2>
          <textarea name="" id="" cols="30" rows="1" placeholder="在这里输入标题" class="textarea1"></textarea>
          <textarea v-model="editorContent" placeholder="在这里输入内容" class="textarea2"></textarea>
        </div>
        <div class="preview">
          <h2>预览</h2>
          <div v-html="previewContent" style="border: 0.2px solid;"></div>
        </div>
      </main>
      <div class="xq">
        <div style="width: 100%;height: 40px;margin-top: 16px;margin-bottom: 8px;">
          <label for="" style="width: 78px;height: 40px;padding-right: 12px;float: left;">文章标签</label>
          <div style="width: 598px;height: 40px;margin-left: 90px;">
            <div style="width: 119px;height: 40px;"><button style="width: 110px;height: 26px;padding: 0 8px;border: 0.6px solid #dbdbdbfe;">+添加文章标签</button></div>
          </div>
        </div>

        <div style="width: 688px;height: 91px;margin-top: 16px;margin-bottom: 8px;">
          <label for="" style="width: 78px;height: 40px;padding-right: 12px;float: left;">添加封面</label>
          <div style="width: 598px;height: 91px;margin-left: 90px;">
            <img src="" alt="" id="imgs" style="width: 158px;height: 88px;border: 0.6px none;border-radius: 5px;">
            <input type="file" id="files" @click="addimg" style="width: 158px;height: 88px;border: 0.6px none;border-radius: 5px;" placeholder="添加文章封面">
          </div>
        </div>

        <div style="width: 688px;height: 91px;margin-top: 16px;margin-bottom: 8px;">
          <label for="" style="width: 78px;height: 40px;padding-right: 12px;float: left;">文章摘要</label>
          <div style="width: 598px;height: 58px;margin-left: 90px;">
            <textarea style="width: 580px;height: 42px;background-color: #fafafa;border: 0.6px solid #dbdbdbfe;" placeholder="摘要：帮助读者快速了解内容"></textarea>
          </div>
        </div>
      </div>

    </div>
    <footer class="footer">
      <div class="ftbt">
        <button @click="publish" style="width: 64px;height: 42px;padding: 10px 12px;text-align: center;margin:0 30px;">发布</button>
        <button @click="publish" style="width: 64px;height: 42px;padding: 10px 12px;text-align: center;margin:0 30px;">保存</button>
      </div>
    </footer>
</div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}

.header {
  padding: 10px 0;
  margin-bottom: 20px;
  width: 1000px;
  height: 70px;
  text-align: center;
  background-color: #ffffff;
}
.header h1{
  padding-left: 10px;
}

.main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  background-color: #ffffff;
}

.editor {
  width: 55%;
  padding-right: 20px;
}

.textarea1{
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.textarea2 {
  width: 100%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.preview {
  width: 40%;
  height: 300px;
}
.preview div{
  width: 100%;
  height: 360px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}

.xq{
  width: 872px;
  height: 300px;
  padding: 8px 64px 24px 64px;
  margin: 24px 0;
  background-color: #ffffff;
}

.footer {
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  background-color: #ffffff;
}
.ftbt{
  margin: 0 auto;
  width: 300px;
}
</style>

<script>
import store from '@/store'
export default {
  name: 'CreatPage',
  data () {
    return {
      editorContent: '',
      previewContent: '',
      fmimg: store.state.fmimg
    }
  },
  watch: {
    editorContent () {
      // 监听编辑器内容变化，在每次变化时更新预览内容
      this.updatePreview()
    }
  },
  methods: {
    updatePreview () {
      // 更新预览内容
      this.previewContent = this.editorContent
    },
    publish () {
      // 处理发布逻辑，例如将内容发送到服务器保存
      // 在这里可以添加相应的 Axios 或者 Fetch 请求
      // 示例中只输出内容到控制台
      console.log(this.editorContent)
    },
    addimg () {
      const files = document.getElementById('files')
      const imgs = document.getElementById('imgs')
      files.onchange = function () {
        imgs.src = URL.createObjectURL(this.files[0])
      }
    }
  },
  created () {
    if (this.$store.state.log !== 1) {
      alert('请先登录')
      this.$router.push('/logon')
    }
  }
}
</script>

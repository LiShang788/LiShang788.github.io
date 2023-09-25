import ArticleDetail from '@/views/ArticleDetail'
import Collect from '@/views/Collect'
import Creat from '@/views/Creat'
import History from '@/views/History'
import Home from '@/views/Home'
import Layout from '@/views/Layout'
import Logon from '@/views/Logon'
import News from '@/views/News'
import Recommend from '@/views/Recommend'
import Study from '@/views/Study'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'recommend',
          component: Recommend
        },
        {
          path: 'news',
          component: News
        },
        {
          path: 'logon',
          component: Logon
        },
        {
          path: 'creat',
          component: Creat
        },
        {
          path: 'collect',
          component: Collect
        },
        {
          path: 'history',
          component: History
        },
        {
          path: 'study',
          component: Study
        }
      ]
    },
    {
      path: '/detail/:id',
      component: ArticleDetail
    }
  ]
})

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'

Vue.use(Router);

//自定义组件
import index from '../views/index.vue'
import newsList from '../views/newsList.vue'
import newsDetail from '../views/newsDetail.vue'

export default new Router({
  //mode:'history',
  base:__dirname,
  linkActiveClass:"my-active", //自定义 路由选中类
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/newsList/:id/channel/:channelName',
      name: 'newsList',
      component: newsList
    },
    {
      path: '/newsList/:id/channel/:channelName/newsDetail/:id',
      name: 'newsDetail',
      component: newsDetail
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})

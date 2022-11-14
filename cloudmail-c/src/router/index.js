import { createRouter, createWebHistory } from 'vue-router'
import Banner from '@/views/banner.vue';  //轮播图设置页
import Dataweek from '@/views/dataweek.vue'; //周数据页
import Datamonth from '@/views/datamonth.vue'; //月数据页
import Index from '@/views/index.vue'; //登录跳转首页
import Shop from '@/views/shop.vue';  //商品管理页
import Userset from '@/views/userset.vue'; //用户管理页
import Login from '@/views/login.vue'; //登录页










const routes = [
  {
    path: '/',
    name: 'index',
    redirect:'data/week',
    component:Index,
    children:[
      {
        path: 'data/week',
        name: 'dataweek',
        component: Dataweek,
      },
      {
        path: 'banner',
        name: 'Banner',
        component: Banner
      },
      {
        path: 'shop',
        name: 'shop',
        component: Shop
      },
      {
        path: 'userset',
        name: 'Userset',
        component: Userset
      },
      {
        path: 'data/month',
        name: 'Datamonth',
        component: Datamonth
      },
    ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
    
  ]

  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router
  
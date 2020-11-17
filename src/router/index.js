import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

//组件的映射关系的配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'',
        redirect:'news'
      },
      {
        path:'msg',
        name:'msg',
        component: () => import('../components/HomeMsg.vue')
      },
      {
        path:'news',
        name:'news',
        component:()=>import('../components/HomeNews.vue')
      }

    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta:{
      title:'关于'
    }
  },
  {
    path:'/user/:id',
    name:'User',
    component: () =>import('../views/User.vue'),
    meta:{
      title:'用户'
    }
  },
  {
    path:'/profile',
    name:'profile',
    component:()=>import('../views/Profile.vue'),
    meta:{
      title:'文件'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass:'active'
})

//前置钩子：路由跳转之前的处理
router.beforeEach((to,from,next)=>{
  console.log('还做程序吗',to)
  document.title=to.matched[0].meta.title;
  next()
})

export default router

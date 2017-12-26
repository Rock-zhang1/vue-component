import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pagination from '@/components/Pagination'
import Echarts from '@/components/Echarts'
import Loadmore from '@/components/Loadmore'
import Loadmored from '@/components/Loadmore.d'
import InfiniteScroll from '@/components/InfiniteScroll'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/loadmore',
      name: 'loadmore',
      component: Loadmore
    },
    {                           // 下拉刷新--数据版
      path: '/loadmore-d',
      name: 'loadmore-d',
      component: Loadmored
    },
    {                           // 下拉刷新--数据版
      path: '/infiniteScroll',
      name: 'infiniteScroll',
      component: InfiniteScroll
    },

    {
      path: '/pagination',
      name: 'Pagination',
      component: Pagination
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: Echarts
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {        //如果未匹配到路由
    next({  path: '/', })   
  } else {
    next();                       //如果匹配到正确跳转
  }
});

export default router;

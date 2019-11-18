import Vue from 'vue'
import Router from 'vue-router'
import Log from '@/components/Log'
import Index from '@/components/Index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Log',
      component: Log
    },
    {
      path: '/log',
      name: 'Log',
      component: Log
    },{
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})

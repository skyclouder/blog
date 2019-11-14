import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/index.html',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

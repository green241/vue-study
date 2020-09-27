import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@comps/HelloWorld'
import TS from '@comps/test/TestScope'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/ts',
      name: 'TS',
      component: TS
    }
  ]
})

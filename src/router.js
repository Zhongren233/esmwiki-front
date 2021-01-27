import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Cards from '@/components/Cards'
import Index from '@/components/Index'
import WorkCostume from '@/components/WorkCostume'
import Info from '@/components/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    }, {
      path: '/cards',
      component: Cards
    }, {
      path: '/home',
      component: Index
    }, {
      path: '/workCostume',
      component: WorkCostume
    }, {
      path: '/info',
      component: Info
    }]

}
)

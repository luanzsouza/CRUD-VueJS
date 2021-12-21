import Vue from 'vue'
import Router from 'vue-router'
import Vagas from'@/components/Vagas'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vagas',
      component: Vagas
    }
  ]
})

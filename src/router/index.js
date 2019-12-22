import Vue from 'vue'
import VueRouter from 'vue-router'
import People from '@/views/People'

Vue.use(VueRouter)

export default (
  new VueRouter({
    routes: [
      {
        path: '/',
        name: 'home',
        component: People
      }
    ]
  })
)

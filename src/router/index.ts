import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '@/components/TodoList.vue'
import Create from '@/components/CreateTodo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

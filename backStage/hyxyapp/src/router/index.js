import Vue from 'vue'
import VueRouter from 'vue-router'

const adminLogin = () => import('../views/adminLogin.vue')
const admin = () => import('../views/admin.vue')
const dataman = () => import('@/components/datamanage/dataman.vue')
const adminmain = () => import('@/components/main/adminmain.vue')
const shoplist = () => import('@/components/datamanage/shoplist.vue')
const slef = () => import('@/components/slef/slef.vue')

Vue.use(VueRouter)

const routes = [{
    path: '/adminLogin',
    name: '/adminLogin',
    component: adminLogin
  },
  {
    path: '/admin',
    name: '/admin',
    component: admin,
    children: [{
        path: 'adminmain',
        name: 'adminmain',
        component: adminmain
      },
      {
        name: "dataman",
        path: "dataman",
        component: dataman
      },
      {
        name: "shoplist",
        path: "shoplist",
        component: shoplist
      },
      {
        name: "slef",
        path: "slef",
        component: slef
      },
    ]
  },
  {
    path: '/adminmain',
    name: '/adminmain',
    component: adminmain
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
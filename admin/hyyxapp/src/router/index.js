import Vue from 'vue'
import VueRouter from 'vue-router'

const adminLogin = () => import('../views/adminLogin.vue')
const admin = () => import('../views/admin.vue')
const userlist = () => import('@/components/datamanage/userlist.vue')
const adminmain = () => import('@/components/main/adminmain.vue')
const shoplist = () => import('@/components/datamanage/shoplist.vue')
const slef = () => import('@/components/slef/slef.vue')
const adminEdit = () => import('@/components/datamanage/adminEdit.vue')
const editshop = () => import('@/components/datamanage/editshop.vue')
const addshop = () => import('@/components/datamanage/addshop.vue')
const addadmin = () => import('@/components/datamanage/addadmin.vue')

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
        name: "userlist",
        path: "userlist",
        component: userlist
      },
      {
        name: "shoplist",
        path: "shoplist",
        component: shoplist
      },
      {
        name: "adminEdit",
        path: "adminEdit",
        component: adminEdit
      },
      {
        name: "slef",
        path: "slef",
        component: slef
      },
      {
        name: "editshop",
        path: "editshop",
        component: editshop
      },
      {
        name: "addshop",
        path: "addshop",
        component: addshop
      },
      {
        name: "addadmin",
        path: "addadmin",
        component: addadmin
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
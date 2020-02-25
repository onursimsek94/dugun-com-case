import Vue from 'vue'
import VueRouter from 'vue-router'
import CompanyList from '@/views/CompanyList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CompanyList',
    component: CompanyList,
  },
  {
    path: '/offer/:companyId',
    name: 'Offer',
    props: true,
    component: () => import('@/views/Offer'),
  },
  {
    path: '/offer-detail/:companyId/:offerId',
    name: 'OfferDetail',
    props: true,
    component: () => import('@/views/OfferDetail'),
  },
  {
    path: '*',
    redirect: '/',
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

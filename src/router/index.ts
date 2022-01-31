import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Stepper from '@/components/Stepper.vue'
import Membership from '@/components/Membership.vue'
import Overview from '@/components/Overview.vue'
import PersonalInfo from '@/components/PersonalInfo.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/form/personalinfo',
    name: 'PersonalInfo',
    props: { default: true, Stepper: { selectedIndex: 0 } },
    components: {
      default: PersonalInfo,
      Stepper: Stepper
    }
  },
  {
    path: '/form/membership',
    name: 'Membership',
    props: { default: true, Stepper: { selectedIndex: 1 } },
    components: {
      default: Membership,
      Stepper: Stepper
    }
  },
  {
    path: '/form/overview',
    name: 'Overview',
    props: { default: true, Stepper: { selectedIndex: 2 } },
    components: {
      default: Overview,
      Stepper: Stepper
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'Home',
    redirect: { name: 'PersonalInfo' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Calender from '../views/Calender.vue'
import Dashboard from '../views/Dashboard.vue'
import Detail from '../views/Detail.vue'
import Finance from '../views/Finance.vue'
import Guest from '../views/Guest.vue'
import Invoicing from '../views/Invoicing.vue'
import Reservation from '../views/Reservation.vue'
import Statistic from '../views/Statistic.vue'
import CheckIn from '../views/Task/CheckIn.vue'
import CheckInOnline from '../views/Task/CheckInOnline.vue'
import CheckOut from '../views/Task/CheckOut.vue'
import Cleaning from '../views/Task/Cleaning.vue'
import Maintenance from '../views/Task/Maintenance.vue'
import Sef from '../views/Task/Sef.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/accommodation/detail',
      name: 'ALOJAMENTOS',
      component: Detail
    },
    {
      path: '/dashboard',
      name: 'DASHBOARD',
      component: Dashboard
    },
    {
      path: '/calender',
      name: 'CALENDARIOS',
      component: Calender
    },
    {
      path: '/reservation',
      name: 'RESERVA',
      component: Reservation
    },
    {
      path: '/guests',
      name: 'GUESTS',
      component: Guest
    },
    {
      path: '/invoicing',
      name: 'INVOICING',
      component: Invoicing
    },
    {
      path: '/finance',
      name: 'FINANCE',
      component: Finance
    },
    {
      path: '/statistic',
      name: 'STATISTIC',
      component: Statistic
    },
    {
      path: '/task/cleaning',
      name: 'CLEANING',
      component: Cleaning
    },

    {
      path: '/task/sef',
      name: 'SEF',
      component: Sef
    },
    {
      path: '/task/check-in-online',
      name: 'CHECK-IN-ONLINE',
      component: CheckInOnline
    },
    {
      path: '/task/check-in',
      name: 'CHECK-IN',
      component: CheckIn
    },
    {
      path: '/task/check-out',
      name: 'CHECK-OUT',
      component: CheckOut
    },
    {
      path: '/task/maintenance',
      name: 'MAINTENANCE',
      component: Maintenance
    }
  ]
})

export default router

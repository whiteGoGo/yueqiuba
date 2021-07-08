import Vue from 'vue'
import VueRouter from 'vue-router'
// import AboutTheBallIndex from '../components/aboutTheBall/AboutTheBallIndex'
import TabLayout from '../components/layout/TabLayout'
import nearTheBallIndex from '../components/nearTheBall/nearTheBallIndex'
import teamCompetitionIndex from '../components/teamCompetition/teamCompetitionIndex'
import peripheralMallIndex from '../components/peripheralMall/peripheralMallIndex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/TabLayout'
  },
  {
    path: '/TabLayout',
    component: TabLayout,
    children: [
      {
        path: '/nearTheBallIndex',
        component: nearTheBallIndex
      },
      {
        path: '/teamCompetitionIndex',
        component: teamCompetitionIndex
      },
      {
        path: '/peripheralMallIndex',
        component: peripheralMallIndex
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router

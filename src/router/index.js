import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import BandList from '@/views/BandList.vue'
import BandDetails from '@/views/BandDetails.vue'
import BandForm from '@/views/BandForm.vue'
import SongList from '@/views/SongList.vue'
import SongDetails from '@/views/SongDetails.vue'
import SongForm from '@/views/SongForm.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/bands',
    name: 'BandList',
    component: BandList
  },
  {
    path: '/bands/new',
    name: 'BandForm',
    component: BandForm
  },
  {
    path: '/bands/:id',
    name: 'BandDetails',
    component: BandDetails,
    props: true
  },
  {
    path: '/bands/:id/edit',
    name: 'BandEditForm',
    component: BandForm,
    props: true
  },
  {
    path: '/songs',
    name: 'SongList',
    component: SongList
  },
  {
    path: '/songs/new',
    name: 'SongForm',
    component: SongForm
  },
  {
    path: '/songs/:id',
    name: 'SongDetails',
    component: SongDetails,
    props: true
  },
  {
    path: '/songs/:id/edit',
    name: 'SongEditForm',
    component: SongForm,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

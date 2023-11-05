import { createRouter, createWebHistory } from 'vue-router'
import HelloComponent from '@/components/HelloComponent.vue'
import NumberList from '@/components/NumberList.vue'
import StaticHtml from '@/components/StaticHtml.vue';
import AddMoreHTML from '@/components/AddMoreHTML.vue';
import PULthi1wBmf from '@/components/PULthi1wBmf.vue';
import Sun91024923Close from '@/components/Sun91024923Close.vue';
import Sun81101597Close from '@/components/Sun81101597Close.vue';
import Sun46134717Close from '@/components/Sun46134717Close.vue';
//place1

const routes = [
  {
    path: '/hello',
    name: 'Hello',
    component: HelloComponent
  },
  {
    path: '/number-list',
    name: 'NumberList',
    component: NumberList
  },
  { path: '/FSh@kNX8vQ23.html', name: 'StaticHtml', component: StaticHtml },
  { path: '/AddMoreHTML.html', name: 'AddMoreHTML', component: AddMoreHTML },
  { path: '/PULthi1wBmf.html', name: 'PULthi1wBmf', component: PULthi1wBmf },
  { path: '/Sun91024923Close.html', name: 'Sun91024923Close', component: Sun91024923Close },
  { path: '/Sun81101597Close.html', name: 'Sun81101597Close', component: Sun81101597Close },
  { path: '/Sun46134717Close.html', name: 'Sun46134717Close', component: Sun46134717Close },
//place2
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

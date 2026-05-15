// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SubjectsView from '../views/SubjectsView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import NotesView from '../views/NotesView.vue'

const routes = [
  { path: '/',           component: HomeView,       name: 'home' },
  { path: '/subjects',   component: SubjectsView,   name: 'subjects' },
  { path: '/calculator', component: CalculatorView, name: 'calculator' },
  { path: '/notes',      component: NotesView,      name: 'notes' },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 } // scroll to top on every navigation
  }
})

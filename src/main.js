import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store/store'

import Main from './sections/main.vue'
import Portfolio from './sections/portfolio.vue'
import Bio from './sections/bio.vue'
import Cv from './sections/cv.vue'
import Contacto from './sections/contacto.vue'
import Publicaciones from './sections/publicaciones.vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  { path: '/', component: Main },
  { path: '/portfolio', component: Portfolio },
  { path: '/bio', component: Bio },
  { path: '/cv', component: Cv },
  { path: '/contacto', component: Contacto },
  { path: '/publicaciones', component: Publicaciones }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')

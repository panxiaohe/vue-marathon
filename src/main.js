import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js';

import './assets/css/reset.css';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

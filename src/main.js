/* eslint-disable no-unused-vars */
import Vue from 'vue';
// import VueResource from 'vue-resource';
import App from './App';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router/index.js';

import 'common/stylus/index.styl';

// Vue.use(VueResource);
Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

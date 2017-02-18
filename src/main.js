// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios';//ajax
import VueAxios from 'vue-axios';
import BootstrapVue from 'bootstrap-vue'
import infiniteScroll from 'vue-infinite-scroll' //无限滚动
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.use(BootstrapVue);
Vue.use(VueAxios,axios);
Vue.use(infiniteScroll);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

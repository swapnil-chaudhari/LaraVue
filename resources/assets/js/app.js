
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

window.Vue = require('vue');
import axios from 'axios'
import App from './components/App.vue'
import VueReosurce from 'vue-resource'

import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/sb-admin.css'
import './bootstrap/font-awesome/css/font-awesome.min.css'
// import '../bootstrap/css/form-elements.css'
import './bootstrap/js/jquery.js'
import './bootstrap/js/bootstrap.min.js'

Vue.use(VueReosurce)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
  el : '#app',
  template : '<App/>',
  components : { App },
  // router : Router
})

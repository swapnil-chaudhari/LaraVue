// require('./bootstrap');

window.Vue = require('vue');
import App from './components/App.vue'
import VueReosurce from 'vue-resource'
import Auth from './packages/auth/auth.js'
import Router from './routes.js'


import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/sb-admin.css'
import './bootstrap/font-awesome/css/font-awesome.min.css'
// import '../bootstrap/css/form-elements.css'
import './bootstrap/js/jquery.js'
import './bootstrap/js/bootstrap.min.js'

Vue.use(VueReosurce)
Vue.use(Auth)

Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

Router.beforeEach(
    (to, from, next) => {
        if (to.matched.some(record => record.meta.forVisitors)) {
            if (Vue.auth.isAuthenticated()){
                next({
                    path : '/dashboard'
                })
            } else next()
        }
        else if (to.matched.some(record => record.meta.forAuth)) {
            if (! Vue.auth.isAuthenticated()){
                next({
                    path : '/login'
                })
            } else next()
        } else {
            next({
                path : '/login'
            })
        }
    }
)

new Vue({
  el : '#app',
  template : '<App/>',
  components : { App },
  router : Router
})

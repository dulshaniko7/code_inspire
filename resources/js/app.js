/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

window.Vue = require('vue');


import VueRouter from 'vue-router';
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

Vue.use(VueRouter)

let routes = [
    { path: '/dashboard', component: Dashboard},
    { path: '/profile', component: Profile}
]

const router = new VueRouter([
    routes
])



Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});

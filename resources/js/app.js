/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

window.Vue = require('vue');


import VueRouter from 'vue-router';
import Router from 'vue-router';

import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

Vue.use(VueRouter)

let routes = [
    { path: '/dashboard', component: Dashboard},
    { path: '/profile', component: Profile}
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

window.Fire =  new Vue();

const app = new Vue({
    el: '#app',
    router
});

require('./bootstrap');

import Vue from 'vue'
window.Vue = Vue

Vue.component('index', () =>
  import('./components/Index.vue'))

const app = new Vue({
    el: '#app'
});
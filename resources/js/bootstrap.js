import lodash from 'lodash';
import axios from 'axios';
import Vue from 'vue';

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';

import ExampleComponent from './components/ExampleComponent.vue';
import MenuComponent from './components/MenuComponent.vue';
import routes from './routes';


window._ = lodash;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vue = Vue;

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes,
});

new Vue({
    router,
    el: '#app',
    components: {
        'example-component': ExampleComponent,
        'menu-component': MenuComponent,
    }
});

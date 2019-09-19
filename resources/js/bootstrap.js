import lodash from 'lodash';
import axios from 'axios';
import Vue from 'vue';

import ExampleComponent from './components/ExampleComponent.vue';
import MenuComponent from './components/MenuComponent.vue';


window._ = lodash;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vue = Vue;

Vue.component('menu-component', MenuComponent);

const app = new Vue({
    el: '#app',

    components: {
        'example-component': ExampleComponent,
        // 'menu-component': MenuComponent,
    }

});

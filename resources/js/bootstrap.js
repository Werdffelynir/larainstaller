import lodash from 'lodash';
import axios from 'axios';
import Vue from 'vue';

import ExampleComponent from './components/ExampleComponent.vue';


window._ = lodash;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vue = Vue;

const app = new Vue({
    el: '#app',
    components: {
        'example-component': ExampleComponent,
    }

});

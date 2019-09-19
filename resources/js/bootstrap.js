import lodash from 'lodash';
import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';

import ExampleComponent from './components/ExampleComponent.vue';
import MenuComponent from './components/MenuComponent.vue';
import vuetify from './plugins/vuetify'
import store from './store';
import routes from './routes';


window._ = lodash;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vue = Vue;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes,
});

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    vuetify,
    el: '#app',
    components: {
        'example-component': ExampleComponent,
        'menu-component': MenuComponent,
    },

    computed: {
        username () {
            return this.$route.params.username
        }
    },
    methods: {
        goBack () {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        }
    }
});

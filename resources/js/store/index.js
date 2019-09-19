import Vue from 'vue'
import Vuex from 'vuex'
import UIModule from './UIModule'


Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    modules: {
        ui: UIModule,
    },
});

export default store;

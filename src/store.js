import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import modules from './store/modules'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
	modules
})

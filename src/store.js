import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		headlines: localStorage.getItem('headlines') || null
  },
  mutations: {
		headlines: (state, data) => {
			state.headlines = data
		},
  },
  actions: {
    fetchHeadlines: (context) => {
      axios.get('https://newsapi.org/v2/top-headlines?country=fr&pageSize=20&category=business', {
				headers: {
					Accept: 'application/json',
					Authorization: 'Bearer ' + '162694f262264b3999626fbda83381db'
				}
			})
			.then(response => {
        localStorage.setItem('headlines', response.data.articles)
        context.commit('headlines', response.data.articles)
			})
			.catch(error => {
				console.log(error)
			});
    }
  },
	getters: {
		headlines: state => state.headlines
	}
})

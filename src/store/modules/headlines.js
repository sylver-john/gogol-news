import axios from 'axios'
import Vue from 'vue'

const state = {
    lang: localStorage.getItem('lang') || [],
    number: localStorage.getItem('number') || null,
    headlines: localStorage.getItem('headlines') || []
}

const mutations = {
    addHeadlines (state, payload) {
        Vue.set(state.headlines, payload.category, payload.articles)
    }
}

const actions = {
    async fetchHeadlines ({commit}, category) {
        let countries = ['fr', 'us', 'gb', 'ca']
        let articles = []
        for (let i = 0; i < countries.length; i++) {
            try {
                let response = await axios.get('https://newsapi.org/v2/top-headlines?country='+countries[i]+'&pageSize=2&category='+category, {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + '162694f262264b3999626fbda83381db'
                    }
                })
                articles.push(...response.data.articles)
            } catch (e) {
                console.log(e) 
            }
        }
        console.log(articles)
        commit('addHeadlines', {
            category: category,
            articles: articles
        })
    }
}

const getters = {
    lang: state => state.lang,
    number: state => state.number,
    headlines: state => state.headlines
}

export default {
  state,
  mutations,
  actions,
  getters
}
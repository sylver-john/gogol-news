import axios from 'axios'

const state = {
    lang: localStorage.getItem('lang') || [],
    categories: localStorage.getItem('categories') || [],
    number: localStorage.getItem('number') || null,
    headlines: localStorage.getItem('headlines') || []
}

const mutations = {
    addHeadlines (state, payload) {
        state.headlines = payload
    },
    addCategory (state, payload) {
        // if the category passed should be removed, we have to check if it's already present into the categories and removed it
        if (!payload.retrieve) {
            state.categories.forEach((category, index) => {
                if (category == payload.category) {
                    state.categories = state.categories.splice(index, 1)
                }
            })
        } else {
            state.categories.push(payload.category)
        }
    }
}

const actions = {
    async fetchHeadlines ({commit}) {
        let articles = []
        for (const category of state.categories) {
            try {
                let response = await axios.get('https://newsapi.org/v2/top-headlines?country=fr&pageSize=2&category='+category, {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + '162694f262264b3999626fbda83381db'
                    }
                })
                articles = articles.concat(response.data.articles)
                console.log(articles)
            } catch (e) {
                console.log(e) 
            }
        }
        commit('addHeadlines', articles)
        console.log(articles)
    }
}

const getters = {
    lang: state => state.lang,
    categories: state => state.categories,
    number: state => state.number,
    headlines: state => state.headlines
}

export default {
  state,
  mutations,
  actions,
  getters
}
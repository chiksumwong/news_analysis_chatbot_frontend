import Vue from 'vue'    

const NewsAPI = {
    checkNewsByUrl: payload => Vue.prototype.$axios.post('/api/checknewsbyurl/', payload),
    checkNewsByText: payload => Vue.prototype.$axios.post('/api/checknews/', payload),
}

export default NewsAPI
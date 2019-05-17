import Vue from 'vue'    

const NewsAPI = {
    checkNewsByUrl: payload => Vue.prototype.$axios.post('/checknewsbyurl/', payload),
}

export default NewsAPI
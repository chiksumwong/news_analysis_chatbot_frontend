import Vue from 'vue'    

const NewsAPI = {
    checkNewsByUrl: payload => Vue.prototype.$axios.post('/api/checknewsbyurl/', payload),
    checkNewsByText: payload => Vue.prototype.$axios.post('/api/checknews/', payload),

    getAllNews: () => Vue.prototype.$axios.get('/api/news/'),
    createNews: payload => Vue.prototype.$axios.post('/api/news/', payload),
}

export default NewsAPI
import Vue from 'vue'    

const NewsAPI = {
    checkNewsByUrl: payload => Vue.prototype.$axios.post('/api/checknewsbyurl/', payload),
    checkNewsByText: payload => Vue.prototype.$axios.post('/api/checknews/', payload),

    getAllNews: () => Vue.prototype.$axios.get('/api/news/'),
    createNews: payload => Vue.prototype.$axios.post('/api/news/', payload),
    updateNewsById: (newsId, payload) => Vue.prototype.$axios.put('/api/news/' + newsId + '/', payload ),
}

export default NewsAPI
import Vue from 'vue'    

const UserAPI = {
    register : payload => Vue.prototype.$axios.post('/user/register/', payload),
    login: (payload) => Vue.prototype.$axios.post('/user/login/', payload),
}

export default UserAPI
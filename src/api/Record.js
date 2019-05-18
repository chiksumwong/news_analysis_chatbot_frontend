import Vue from 'vue'    

const RecordAPI = {
    getAllRecords: () => Vue.prototype.$axios.get('/api/record/'),
}

export default RecordAPI
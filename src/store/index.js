import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from '@/store/user'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
      user,
  },
  plugins: [createPersistedState()]
})

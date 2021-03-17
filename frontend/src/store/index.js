import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import getters from '@/store/getters'

import users from '@/store/services/users'
import auth from '@/store/modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    users,
    auth
  },
  state: {
    token: '',
    user: {},
    store: {},
    company: {},
    flags: {
      isAdminPage: false,
      isLoading: false
    }
  },
  actions,
  mutations,
  getters
})

export default store

import ApiService from '@/common/api.service'
import { LOGIN, LOGOUT, REGISTER } from './actions.type'
import { SET_AUTH, SET_ERROR, PURGE_AUTH } from './mutations.type'


const state = {
  errors: null,
  user: {},
  signedIn: false,
  csrf: null
}
const getters = {
  signedIn (state) {
    return state.signedIn
  }
}

const actions = {
  [LOGIN] (context, credentials) {
    return new Promise(resolve => {
      ApiService.post('/login', credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data)
          resolve(data)
        })
        .catch (({ response }) => {
          context.commit(SET_ERROR, response.data.data.attributes.message)
        })
    })
  },
  [REGISTER] (context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post('/register', credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data)
          resolve(data)
        })
        .catch (({ response }) => {
          context.commit(SET_ERROR, response.data.error)
          reject(response)
        })
    })
  },
  [LOGOUT] (context) {
    context.commit(PURGE_AUTH)
  }
}

const mutations = {
  [SET_ERROR] (state, data) {
    state.errors = data
  },
  [SET_AUTH] (state, data) {
    state.signedIn = true
    state.csrf = data.csrf
    state.user = data.user.data.attributes
  },
  [PURGE_AUTH] (state) {
    state.signedIn = false
    state.csrf = null
    state.errors = null
    state.user = {}
  }
}

export default {
    state,
    actions,
    mutations,
    getters
}

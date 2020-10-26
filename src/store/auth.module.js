import ApiService from '@/common/api.service'
import { LOGIN, LOGOUT, REGISTER, UPDATE_USER } from './actions.type'
import { SET_AUTH, SET_ERROR, PURGE_AUTH } from './mutations.type'

const state = {
  errors: null,
  user: {},
  signedIn: false,
  access: null
}

const getters = {
  signedIn (state) {
    return state.signedIn
  },
  getUser (state) {
    return state.user
  },
  getToken (state) {
    return state.access
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
        .catch(({ response }) => {
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
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.error)
          reject(response)
        })
    })
  },
  [UPDATE_USER] (context, details) {
    return new Promise((resolve, reject) => {
      ApiService.update(`/users/${state.user.id}`, state.access, details)
        .then(({ data }) => {
          console.log(data)
          context.commit(SET_AUTH, data)
          resolve(data)
        })
        .catch(({ response }) => {
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
    state.user = data.user.data.attributes
    if (state.access) {
      return
    } else {
      state.access = data.access
    }
  },
  [PURGE_AUTH] (state) {
    state.signedIn = false
    state.access = null
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

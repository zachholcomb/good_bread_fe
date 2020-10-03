import ApiService from '@/common/api.service'
import { GET_ITEMS } from './actions.type'
import { SET_ITEMS, SET_ERROR } from './mutations.type'

const state = {
  items: null
}

const getters = {
  getItems (state) {
    return state.items
  }
}

const actions = {
  [GET_ITEMS] (context) {
    return new Promise(resolve => {
      ApiService.get('/items')
        .then(({ data }) => {
          context.commit(SET_ITEMS, data)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data)
        })
    })
  }
}

const mutations = {
  [SET_ITEMS] (state, data) {
    state.items = data.data
  },
  [SET_ERROR] (state, data) {
    state.errors = data
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}


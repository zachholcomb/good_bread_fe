import ApiService from '@/common/api.service'
import { GET_ITEMS } from './actions.type'
import { SET_ITEMS, SET_ERROR } from './mutations.type'

const state = {
  items: null,
  bread: null,
  pastries: null,
  donuts: null,
  bagels: null
}

const getters = {
  getItems (state) {
    return state.items
  },
  getBread (state) {
    return state.bread
  },
  getPastries (state) {
    return state.pastries
  },
  getDonuts (state) {
    return state.donuts
  },
  getBagels (state) {
    return state.bagels
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
    const bread = data.data.filter(item => item.attributes.item_type === 'Bread')
    const pastries = data.data.filter(item => item.attributes.item_type === 'Pastries')
    const donuts = data.data.filter(item => item.attributes.item_type === 'Donuts')
    const bagels = data.data.filter(item => item.attributes.item_type === 'Bagels')

    state.items = data.data
    state.bread = bread
    state.pastries = pastries
    state.donuts = donuts
    state.bagels = bagels
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

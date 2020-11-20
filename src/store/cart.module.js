import { ADD_CART, REMOVE_ITEM, REMOVE_CART, SET_ORDER, GUEST_ORDER } from './actions.type'
import { SET_CART, PURGE_CART_ITEM, PURGE_CART, SET_ERROR } from './mutations.type'
import Vue from 'vue'
import ApiService from '@/common/api.service'

const state = {
  items: {},
  temp_order: {},
  cart_errors: null
}

const getters = {
  getCart (state) {
    return state.items
  }
}

const actions = {
  [ADD_CART] (context, input) {
    if (input.amount === 'Bakers Dozen') {
      input.amount = 13
    } else if (input.amount === 'Half Dozen') {
      input.amount = 6
    } else {
      input.amount = 1
    }
    context.commit(SET_CART, input)
  },
  [REMOVE_ITEM] (context, item) {
    const itemName = item[0]
    context.commit(PURGE_CART_ITEM, itemName)
  },
  [REMOVE_CART] (context) {
    context.commit(PURGE_CART)
  },
  [SET_ORDER] (context, input) {
    const items = Object.values(input.cart).reduce((hash, item) => {
      hash[item.id] = { amount: item.amount }
      return hash
    }, {})
    const params = { "items": items }
    return new Promise(resolve => {
      ApiService.securedPost(`/users/${input.user.id}/orders`, input.token, params)
        .then(({ data }) => {
          context.commit(PURGE_CART)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data)
        })
    })
  },
  [GUEST_ORDER] (context, input) {
    const items = Object.values(input.items).reduce((hash, item) => {
      hash[item.id] = { amount: item.amount }
      return hash
    }, {})
    input.items = items
    return new Promise(resolve => {
      ApiService.post('/orders', input)
        .then(({ data }) => {
          context.commit(PURGE_CART)
          resolve(data)
        })
    })
  }
}

const mutations = {
  [SET_CART] (state, input) {
    const name = input.name
    const id = input.id
    const amount = input.amount
    const price = input.price
    if (state.items[name]) {
      state.items[name].amount += amount
    } else {
      state.items[name] = { id: id, amount: amount, price: price }
    }
  },
  [PURGE_CART_ITEM] (state, itemName) {
    Vue.delete(state.items, itemName)
  },
  [PURGE_CART] (state) {
    state.items = {}
  },
  [SET_ERROR] (state, data) {
    state.cart_errors = data
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

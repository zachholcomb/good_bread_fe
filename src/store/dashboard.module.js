import ApiService from '@/common/api.service'
import { UPDATE_SUB, USER_ORDERS, USER_SUB } from './actions.type'
import { SET_SUB, SET_ERROR, SET_ORDERS } from './mutations.type'

const state = {
  errors: null,
  user_sub: {},
  user_next_shipment: {},
  user_orders: []
}
const getters = {
  userSub (state) {
    return state.user_sub
  },
  userNextShipment (state) {
    return state.user_next_shipment
  },
  userOrders (state) {
    return state.user_orders
  }
}

const actions = {
  [USER_SUB] (context, params) {
    return new Promise(resolve => {
      ApiService.securedGet(`/users/${params.userId}/subscription`, params.token)
        .then(({ data }) => {
          context.commit(SET_SUB, data)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.data.attributes.message)
        })
    })
  },
  [UPDATE_SUB] (context, params) {
    return new Promise(resolve => {
      ApiService.update(`users/${params.userId}/subscription/${state.user_sub.id}`, params.token, params.update_sub)
        .then(({ data }) => {
          context.commit(SET_SUB, data)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.data.attributes.message)
        })
    })
  },
  [USER_ORDERS] (context, params) {
    return new Promise(resolve => {
      ApiService.securedGet(`/users/${params.userId}/orders`, params.token)
        .then(({ data }) => {
          context.commit(SET_ORDERS, data)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.data.attributes.message)
        })
    })
  }
}

const mutations = {
  [SET_ERROR] (state, data) {
    state.errors = data
  },
  [SET_SUB] (state, data) {
    state.user_sub = data.subscription.data.attributes
    state.user_next_shipment = data.shipment.data.attributes
  },
  [SET_ORDERS] (state, data) {
    state.user_orders = data.data
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

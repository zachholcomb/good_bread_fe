import ApiService from '@/common/api.service'
import { FETCH_ITEMS } from './actions.type'
import { SET_ORDER_ITEMS } from './mutations.type'

const state = {
  orderItems: []
}

const getters = {
  orderItems (state) {
    return state.orderItems
  }
}

const actions = {
  [FETCH_ITEMS] (context, orderId) {
    const userId = context.rootState.auth.user.id
    const token = context.rootState.auth.access
    return new Promise(resolve => {
      ApiService.securedGet(`/users/${userId}/orders/${orderId}/items/`, token)
        .then(({ data }) => {
          context.commit(SET_ORDER_ITEMS, data)
          resolve(data)
        })
    })
  }
}

const mutations = {
  [SET_ORDER_ITEMS] (state, data) {
    state.orderItems = data.data
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
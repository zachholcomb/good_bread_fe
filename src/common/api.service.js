import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const API_URL = 'http://localhost:3000/api/v1'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  setHeader (token) {
    Vue.axios.defaults.headers.common =
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  },
  post (resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },
  get (resource) {
    return Vue.axios.get(`${resource}`)
  },
  securedGet (resource, token) {
    this.setHeader(token)
    return Vue.axios.get(`${resource}`)
  },
  update (resource, token, params) {
    this.setHeader(token)
    return Vue.axios.put(`${resource}`, params)
  }
}

export default ApiService

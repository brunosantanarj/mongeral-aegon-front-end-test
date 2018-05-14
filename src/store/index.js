import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const URL = 'http://localhost:3000/products'

// initial state
const state = {
  products: [],
  loading: true
}

// getters
const getters = {
}

// mutations
const mutations = {
  [types.ADD_PRODUCT] (state, { id }) {
  },
  updateProducts (state, products) {
    state.products = products
  },
  changeLoadingState (state, loading) {
    state.loading = loading
  }
}

// actions
const actions = {
  loadData ({
    commit
  }) {
    axios.get(URL).then((response) => {
      commit('updateProducts', response.data)
      commit('changeLoadingState', false)
    })
  },
  addProduct ({ commit }, product) {
    commit(types.ADD_PRODUCT, {
      id: product.id
    })
  }
}

// one store for entire application
export default new Vuex.Store({
  state,
  strict: debug,
  getters,
  actions,
  mutations
})

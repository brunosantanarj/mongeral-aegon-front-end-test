import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const URL = 'http://localhost:3000/products'

// initial state
const state = {
  added: [],
  products: [],
  selectedProduct: {
    'id': 1,
    'name': 'Caneta escolar Batman',
    'price': '25.00',
    'image': 'caneta-batman.jpg',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  loading: true
}

// getters
const getters = {
  allProducts: state => state.products,
  cartProducts: state => {
    return state.added.map(({ id, quantity }) => {
      const product = state.products.find(p => p.id === id)
      return {
        name: product.name,
        price: product.price,
        quantity
      }
    })
  }
}

// mutations
const mutations = {
  [types.ADD_TO_CART] (state, { id }) {
    const record = state.added.find(p => p.id === id)

    if (!record) {
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  [types.SET_SELECTED_PRODUCT] (state, { product }) {
    state.selectedProduct = product
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
  addToCart ({ commit }, product) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  },
  setSelectedProduct ({ commit }, product) {
    commit(types.SET_SELECTED_PRODUCT, {
      product: product
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

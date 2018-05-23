import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import { expect } from 'chai'
import Vuex from 'vuex'
import 'babel-polyfill'

import Cart from '@/components/Cart'

describe('Cart.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      removefromCart: sinon.stub(),
    }
    store = new Vuex.Store({
      state: {
        added: [
          {
            id: 1, 
            name: "Caneta escolar Batman", 
            price: "25.00", 
            quantity: 1
          },
          {
            id: 2, 
            name: "Lápis animais c/ borracha", 
            price: "4.00", 
            quantity: 3
          }
        ],
        products: [{
          "id": 1,
          "name": "Caneta escolar Batman",
          "price": "25.00",
          "image": "caneta-batman.jpg",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id": 2,
            "name": "Lápis animais c/ borracha",
            "price": "4.00",
            "image": "lapis-animais.jpg",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }],
        loading: true
      },
      getters: {
        cartProducts: state => {
          return state.added.map(({ id, quantity }) => {
            const product = state.products.find(p => p.id === id)
            return {
              id: product.id,
              name: product.name,
              price: product.price,
              quantity
            }
          })
        }
      },
      actions
    })
  })

  it('renders one line table for each item in store.state.added.length', () => {
    const wrapper = shallowMount(Cart, {store})
    let totalAdded = store.state.added.length
    expect(wrapper.findAll('table tr.tr-product-added').length).to.equal(totalAdded)
  })

  it('calls store action removefromCart when button romove is clicked', () => {
    const wrapper = shallowMount(Cart, {store})
    wrapper.find('a.bt-remove-product').trigger('click')
    expect(actions.removefromCart.calledOnce).to.equal(true)
  })
})
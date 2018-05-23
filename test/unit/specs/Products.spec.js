import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import { mount } from 'avoriaz'
import sinon from 'sinon'
import { expect } from 'chai'
import Vuex from 'vuex'
import 'babel-polyfill'

import Products from '@/components/Products'
import ProductDetails from '@/components/ProductDetails'

describe('Products.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      addToCart: sinon.stub(),
    }
    store = new Vuex.Store({
      state: {
        added: [],
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
        },
        {
            "id": 3,
            "name": "Caderno floral A4",
            "price": "79.00",
            "image": "caderno-floral.jpg",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }],
        selectedProduct: {
          "id": 1,
          "name": "Caneta escolar Batman",
          "price": "25.00",
          "image": "caneta-batman.jpg",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        loading: true
      },
      actions
    })
  })

  it('renders div.box for each item in store.state.products', () => {
    const wrapper = shallowMount(Products, {store})
    let totalProducts = store.state.products.length
    expect(wrapper.findAll('div.box').length).to.equal(totalProducts)
  })

  it('has a ProductDetails component', () => {
    const wrapper = shallowMount(Products, {store})
    const productDetails = wrapper.find(ProductDetails)
    expect(productDetails.isVueComponent).to.equal(true)
  })

  it('calls store action addToCart when button "Comprar" is clicked', () => {
    const wrapper = shallowMount(Products, {store})
    wrapper.find('button.bt-buy').trigger('click')
    expect(actions.addToCart.calledOnce).to.equal(true)
  })
})
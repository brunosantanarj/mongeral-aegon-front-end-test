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
        products: [],
        selectedProduct: {
          'id': 1,
          'name': 'Caneta',
          'description': 'Caneta escolar Batman',
          'price': '25.00',
          'image': 'caneta-batman.jpg'
        },
        loading: true
      },
      actions
    })
  })

  it('has a ProductDetails component', () => {
    const wrapper = shallowMount(Products, {store})
    const productDetails = wrapper.find(ProductDetails)
    expect(productDetails.isVueComponent).to.equal(true)
  })
})
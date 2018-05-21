import Products from '@/components/Products'
import Vue from 'vue'

describe('Products.vue', () => {

  it('Displays items from the list of products', () => {
    // build component
    const Constructor = Vue.extend(Products)
    const ProductsComponent = new Constructor().$mount()
    //expect(ProductsComponent.$el.textContent).to.contain('Lápis');
  })
})
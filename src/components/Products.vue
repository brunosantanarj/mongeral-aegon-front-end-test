<template>
  <div class="container">
    <h2 class="title is-4">Total de {{products.length}} produtos</h2>

    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="product in products" :key="product.id">
        <div class="box">
          <img v-bind:src="`./src/assets/images/${product.image}`" @click='viewProducDetails(); setSelectedProduct(product);' v-bind:style="{ cursor: 'pointer' }"/>
          <p class="has-text-weight-bold is-size-6 has-text-centered">{{product.name}}</p>
          <p class="has-text-centered">R${{product.price}}</p>
          <div class="has-text-centered">
            <button @click='addToCart(product)' class='button is-info'>
              <span class="icon">
                <i class="fa fa-shopping-cart"></i>
              </span>
              <span>Comprar</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <product-details :propClass="this.propClass" v-on:close-modal="handleCloseModal"></product-details>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import ProductDetails from './ProductDetails.vue'

export default {
  data: function () {
    return {
      propClass: ""
    }
  },
  components: {
    ProductDetails
  },
  computed:mapState(['products', 'loading']),
  created() {
    this.$store.dispatch('loadData') // dispatch loading
  },
  methods:{
    viewProducDetails: function(product){
      this.propClass = "is-active"
    },
    handleCloseModal: function() {
      this.propClass = ""
    },
    ...mapActions([
      'addToCart',
      'setSelectedProduct'
    ])
  }
}
</script>
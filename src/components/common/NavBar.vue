<template>
  <div>
    <router-link to='/' class="logo">
    </router-link>
    
    <router-link to='/cart' class="bt-default bt-checkout info-color">
      <span class="icon">
        <i class="fa fa-shopping-cart"></i>
      </span>
      <span>Checkout ({{itemsInCart}})</span>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    itemsInCart(){
      let cart = this.$store.getters.cartProducts;
      
      return cart.reduce((accum, item) => accum + item.quantity, 0)
    }
  }
}
</script>
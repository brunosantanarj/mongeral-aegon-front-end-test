<template>
  <div class="nav-item is-tab" :class="{ 'active-bottom-border': $route.path === '/cart' }">
    <div class="field is-grouped">
      <p class="control">
        <router-link to='/' class="button is-primary">
          <span class="icon">
            <i class="fa fa-pencil"></i>
          </span>
          <span>Vitrine</span>
        </router-link>
        
        <router-link to='/cart' class="button is-info">
          <span class="icon">
            <i class="fa fa-shopping-cart"></i>
          </span>
          <span>Checkout ({{itemsInCart}})</span>
        </router-link>
      </p>
    </div>
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
<template>
  <div class="cart">
    <h1 class="title">Carrinho</h1>
    <p v-show="!products.length">
      <i>Seu carrinho está vazio!</i>
      <router-link to="/">Go shopping</router-link>
    </p>
    <table class="table is-striped" v-show="products.length">
      <thead>
        <tr>
          <td>Nome</td>
          <td>Preço</td>
          <td>Quantidade</td>
          <td>Remover</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" class="tr-product-added">
            <td>{{ product.name }}</td>
            <td>${{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <a href="javascript:void(0)" class="icon bt-remove-product" @click='removefromCart(product)'>
                <i class="fa fa-trash"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td><b>Total:</b></td>
            <td></td>
            <td><b>R${{ total }}</b></td>
          </tr>
      </tbody>
</table>
    <p><button v-show="products.length" class='button is-primary' @click='checkout'>Checkout</button></p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts'
    }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    checkout(){
      alert('Total R$' + this.total)
    },
    ...mapActions([
      'removefromCart'
    ])
  }
}
</script>
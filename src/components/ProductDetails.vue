<template>
  <div class="modal" v-bind:class="propClass">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <div class="has-text-centered">
          <img v-bind:src="`./src/assets/images/${selectedProduct.image}`" />
        </div>
        <p class="has-text-weight-bold is-size-5 has-text-centered">
          {{selectedProduct.name}}
          <span class="has-text-centered tag is-primary">R${{selectedProduct.price}}</span>
        </p>
        <p><span class="has-text-weight-semibold">Descrição: </span>{{selectedProduct.description}}</p>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click='closeModal()'></button>
  </div>
</template>

<script>
import { mapState} from 'vuex'

export default {
  name: 'product-details',
  props: ['propClass'],
  data: function () {
    return {
      modalClass: this.propClass
    }
  },
  computed:mapState(['selectedProduct']),
  methods:{
    closeModal: function(){
      this.$emit('close-modal')
    }
  },
  created() {
    console.log(this.data)
  }
}
</script>

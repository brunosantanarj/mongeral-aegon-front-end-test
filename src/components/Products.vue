<template>
  <div>
    <h1 class="title">Todos os produtos</h1>
      <p>{{products.length}} produtos</p>
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{product.name}}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  computed: mapState(['products', 'loading']),
  created() {
    console.log(this.$store)
    
    this.$store.dispatch('loadData') // dispatch loading
  },
  methods: mapActions([
    'addProduct'
  ])
}
</script>
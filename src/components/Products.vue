<template>
    <div class="container">
        <a class="fixo button is-large is-danger is-loading" v-show="loading">Loading</a>

        <h1 class="title"></h1>
        <div class="columns">
            <div class="column is-5">
                <p class="control has-addons">
                <input class="input is-expanded" type="text" placeholder="Procure pelo nome" v-model="search">
                <a class="button is-info" @click="searchProducts">Search</a>
                </p>
            </div>
            <div class="column is-5">

            </div>
        </div>
        <div class="columns">
            <div class="column is-12">
                <table class="table is-narrow is-bordered">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products" :key="product.id">
                        <td>{{ product.name }}</td>
                        <td>{{ product.quantity }}</td>
                        <td class="is-icon">

                            <a href="#">
                            <i class="fa fa-edit"></i>
                            </a>
                            <a href="#">
                            <i class="fa fa-trash"></i>
                            </a>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>export default {
    data () {
      return {
        isLoading: false,
        title: 'Vitrine de Produtos',
        search: '',
        products: [],
        page: 1,
        total: 0,
        selected: {},
        itensPerPage: 10
      }
    },
    methods: {
      showLoading(){
        this.isLoading=true
      },
      hideLoading(){
        this.isLoading=false
      },
      loadProducts(){

        let t = this
        this.showLoading()

        this.$http.get(`/products`).then(
            response=>{
                t.products = response.body
                console.log(t.products)
                t.total = response.headers['X-Total-Count']
            },
            error=>{
                console.log(error)
            }).finally(function () {
            t.hideLoading()
        })

       },
       searchProducts(){

       }
    },
    created(){
        this.loadProducts();
    }
}
</script>

<style>
  .fixo{float: right; margin-right: 10px; margin-top: 0px; z-index: 1000;}
</style>
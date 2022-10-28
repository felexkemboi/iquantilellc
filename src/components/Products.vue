<template>
    <h2 class="title">Products</h2>
    <div v-if="products.length < 1">
      <p>There are no products click the button below to add</p>
    </div>
    <div v-else>
        <div class="flex-row">
            <label>Filter by User: </label>
            <select v-model="user">
                <option v-for="option in users" :value="option.id" :label="option.name">
                    {{ option}}
                </option>
            </select>
        </div>
        <div>
        <table class="table">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
                <th></th>
            </tr>
            <tr v-for="(product, index) in products" :key="index">
                <td>{{ product.title }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.price }}$</td>
                <td>{{ product.category }}</td>
                <td><button type="button" class="add_to_cart_button" @click="addToMyCart(product)">Add to Cart</button></td>
            </tr>
        </table>
        <MyCart :products="boughtProducts"></MyCart>
        </div>
    </div>  
</template>

<script setup>
  import { ref } from 'vue'
  import {computed} from 'vue';
  import {useStore} from "vuex";
  import MyCart from './MyCart.vue';

  const users = computed(() => store.getters.users)
  const user = ref(0)
  const store = useStore();
  const products = computed(() => store.getters.getProducts(user))
  const boughtProducts = computed(() => store.getters.getBoughtProducts)

  const addToMyCart = (product) => {
    store.commit('removeProduct', product)
  }

</script>

<style scoped>
.title {
  color: blue;
  font-size: 35px;
}
.table {
    margin: auto;
    width: 50%;
    margin-top: 40px;
}
.add_to_cart_button {
    width: 130px;
}
</style>
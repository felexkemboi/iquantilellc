<template>
    <div class="home">    
    <h2>My Cart</h2>
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
            <td><button type="button" @click="removeFromCart(product)">Remove</button></td>
        </tr>
    </table>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
const pr = defineProps({
  products: Array
})
const store = useStore();


const removeFromCart = (product) => {
  store.commit('addProduct', product)
}

</script>

<style scoped>
.table {
  margin: auto;
  width: 50%;
}

h2 {
  color: blue;
  font-size: 35px;
}
.home {
  margin-top: 40px;
}
</style>


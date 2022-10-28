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
        <li v-for="(product, index) in products" :key="index">
        {{ product }}
        </li>
    </div>  
    <!-- <button type="button"><router-link to="/add-product">Add Product</router-link></button> -->
</template>

<script setup>
  import { ref } from 'vue'
  import {computed} from 'vue';
  import {useStore} from "vuex";

  const users = computed(() => store.getters.users)
  const user = ref(2)
  const store = useStore();
  const products = computed(() => store.getters.getProducts(user))

</script>

<style scoped>
.title {
  color: blue;
  font-size: 35px;
}
.select_bar {
    max-width: 25px;
    font-size: 35px;
}
</style>
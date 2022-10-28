<template>
    <div class="home">    
    <h2>Sign Up</h2>
    <div class="search flex-row">
      <label>Email  :   </label>
      <input class="input" type="text" placeholder="Enter your Email" v-model="email" />
    </div>
    <div class="search flex-row">
      <label>Name  :   </label>
      <input class="input" type="text" placeholder="Enter your Name" v-model="name" />
    </div>
    <div class="search flex-row">
      <label>ID  :   </label>
      <input class="input" type="text" placeholder="Enter your ID(Integers)" v-model="id" />
    </div>
    <div class="search flex-row">
      <label>Password :</label>
      <input class="input" type="password" placeholder="Enter your password" v-model="password" />
    </div>
    <div>
      <button type="button" @click="signup">Sign Up</button>
    </div>
    <div>
      <p>Already existing Account? </p>
      <button type="button">
        <router-link to="/login">Login</router-link>
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import {computed} from 'vue';
  import {useStore} from "vuex";

  const email = ref('')
  const name = ref('')
  const id = ref('')
  const password = ref('')

  const store = useStore();
  const users = computed(() => store.getters.users)

  const signup = async function () {
    const user = {
      name: name.value,
      id: id.value,
      email: email.value,
      password: password.value
    }

    store.commit("addUser", user);
    console.log(users)
  };
</script>

<style scoped>
.home {
  margin-top: 20px;
}
.search {
  text-align: center;
}

input {
  border: 1px solid rgb(135, 170, 71);
  border-radius: 10px;
  min-height: 45px;
  min-width: 70vh;
  text-align: center;
  margin: 20px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>


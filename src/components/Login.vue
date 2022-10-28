<template>
    <div class="home">    
    <h2>Login</h2>
    <div class="search flex-row">
      <label>Email  :   </label>
      <input class="input" type="text" placeholder="Enter your Email" v-model="email" />
    </div>
    <div class="search flex-row">
      <label>Password :</label>
      <input class="input" type="password" placeholder="Enter your password" v-model="password" />
    </div>
    <div>
      <button type="button" @click="login">Login</button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const email = ref('')
  const password = ref('')

  const login = async function () {
    console.log(email.value,password.value)
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


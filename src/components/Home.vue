<template>
  <div>    
    <h2>Product Management Systems</h2>
    <div class="home_buttons">
      <button type="button">
        <router-link to="/login">Login</router-link>
      </button>
      <button type="button">
        <router-link to="/signup">Sign Up</router-link>
      </button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped> 
  .home_buttons {
    padding: 20px;
    display: flex;
    justify-content: space-around;
  }
</style>


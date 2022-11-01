<template>
    <div class="home">    
    <h2>Sign Up</h2>

    <Form class="search flex-row">
      <div>
        <label>Email  :   </label>
        <Field placeholder="Enter your Email" name="email" v-model="email" :rules="validateEmail" />
        <ErrorMessage name="email" />
      </div>

      <div>
        <label>Name  :   </label>
        <Field placeholder="Enter your Name" name="name"  v-model="name" />
      </div>

      <div>
        <label>ID  :   </label>
        <Field placeholder="Enter your ID" name="id"  v-model="id" type="number" />
      </div>

      <div>
        <label>Password  :   </label>
        <Field placeholder="Enter your Password" name="email" v-model="password" :rules="validatePassword" />
        <ErrorMessage name="email" />
      </div>

      <div>
        <label>Confirm Password  :   </label>
        <Field placeholder="Confirm your Password" name="email" v-model="confirm_password" :rules="validatePassword" />
        <ErrorMessage name="confirm_password" />
      </div>

    </Form>

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
  import {useStore} from "vuex";
  import { Field, Form, ErrorMessage } from 'vee-validate';
  // import { extend } from 'vee-validate'

  const email = ref('')
  const name = ref('')
  const id = ref('')
  const password = ref('')
  const confirm_password = ref('')

  const store = useStore();

  const validateEmail = (value) => {
      if (!value) {
        return 'This field is required';
      }

      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      return true;
  }

  const validatePassword = (value) => {
    return true
  }

  // extend('validatePassword', {
  //   getMessage: () => "The password must contain at least: 1 uppercase letter, 1 lowercase letter and must be atleast 6 characters",
  //   validate: value => new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})").test(value)
  // })

  const signup = async function () {
    const user = {
      name: name.value,
      id: id.value,
      email: email.value,
      password: password.value
    }

    store.commit("addUser", user);
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


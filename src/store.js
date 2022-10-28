import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      email: "felokemboi10@gmail.com",
      password: "Password"
    },
    loggedIn: false
  },
  mutations: {
    loginUser(state) {
      state.loggedIn = true;
    },
    logoutUser(state) {
      state.loggedIn = false;
    },
  },
  actions: {

  },
  getters: {
    isLoggedIn:  state => state.loggedIn,
    user: state => state.user
  }
})
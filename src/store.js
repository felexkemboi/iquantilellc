import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      {
        id: 2,
        name: 'Felex',
        email: "felokemboi10@gmail.com",
        password: "Password"
      },
      {
        id: 3,
        name: 'Limo',
        email: "limo@gmail.com",
        password: "Password"
      }
    ],

    products: [
      {
        title: 'Blazer', 
        description: 'It goes well with a trouser', 
        quantity: 2, 
        price: 45, 
        userId: 2, 
        category: 'Fashinon'
      },
      {
        title: 'Flask', 
        description: 'For maintaining food temperature', 
        quantity: 2, 
        price: 45, 
        userId: 2, 
        category: 'Kitchen'
      },
      {
        title: 'Hammer', 
        description: 'For nailing of nails', 
        quantity: 2, 
        price: 45, 
        userId: 3, 
        category: 'Workshop'
      }
    ],

    loggedIn: false
  },
  mutations: {
    loginUser(state) {
      state.loggedIn = true;
    },
    addUser(state, user) {
      state.users.push(user);
    },
    addProduct(state, product) {
      state.products.push(product);
    },
  },
  getters: {
    isLoggedIn:  state => state.loggedIn,
    users:  state => state.users,
    getProducts: (state) => (id) => {
      return id.value === 0 ? state.products : state.products.filter(product => product.userId === id.value);
    },
    user: (state) => (email) => {
      return state.users.find(user => user.email === email)
    }
  }
})
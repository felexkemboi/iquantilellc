import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      {
        id: 0,
        name: 'All',
      },
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
    boughtProducts: [],

    loggedIn: false
  },
  mutations: {
    loginUser(state) {
      state.loggedIn = true;
    },
    addUser(state, user) {
      state.users.push(user);
    },
    addProduct(state, productToAdd) {
      state.products.push(productToAdd);
      state.boughtProducts = state.boughtProducts.filter((product) => product !== productToAdd)
    },
    removeProduct(state, boughtProduct) {
      state.boughtProducts.push(boughtProduct)
      state.products = state.products.filter((product) => product !== boughtProduct)
    }
  },
  getters: {
    isLoggedIn:  state => state.loggedIn,
    users:  state => state.users,
    getProducts: (state) => (id) => {
      return id.value === 0 ? state.products : state.products.filter(product => product.userId === id.value);
    },
    getBoughtProducts: state => state.boughtProducts,
    user: (state) => (email) => {
      return state.users.find(user => user.email === email)
    }
  }
})
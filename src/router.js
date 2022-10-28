import { createWebHistory, createRouter } from 'vue-router';
import Home from  './components/Home.vue'
import Login from  './components/Login.vue'
import SignUp from  './components/SignUp.vue'
import Products from  './components/Products.vue'

const routes = [
    {
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
	},
	{
		path: '/signup',
		name: 'signup',
		component: SignUp,
	},
	{
		path: '/products',
		name: 'products',
		component: Products,
	},
	{
		path: '/:catchAll(.*)*',
		redirect: '/',
		name: "PageNotFound",
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
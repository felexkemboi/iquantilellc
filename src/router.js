import { createWebHistory, createRouter } from 'vue-router';
import Home from  './components/Home.vue'

const routes = [
    {
		path: '/',
		name: 'home',
		component: Home,
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
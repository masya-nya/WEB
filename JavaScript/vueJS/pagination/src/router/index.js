import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/',
            name: 'Home',
            component: () => import('../views/HomePage.vue'),
        },
        {
            path: '/post/:userId?',
            name: 'Posts',
            component: () => import('../views/PostPage.vue')
        }
    ]
})
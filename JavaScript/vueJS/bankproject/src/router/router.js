import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../store/store'

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { 
            path: '/',
            name: 'Home',
            component: () => import('../views/HomePage.vue'),
            meta: {
                layout: 'main',
                auth: true
            }
        },
        {
            path: '/help',
            name: 'Help',
            component: () => import('../views/HelpPage.vue'),
            meta: {
                layout: 'main',
                auth: true
            }
        },
        {
            path: '/auth',
            name: 'Auth',
            component: () => import('../views/AuthPage.vue'),
            meta: {
                layout: 'auth',
                auth: false
            }
        },
        {
            path: '/signup',
            name: 'Signup',
            component: () => import('../views/SignupPage.vue'),
            meta: {
                layout: 'auth',
                auth: false
            }
        }
    ],
    linkActiveClass: 'activeRoute',
    linkExactActiveClass: 'activeRoute'
}) 

router.beforeEach((to, from, next) => {
    const requireAuth = to.meta.auth;
    if (requireAuth && store.getters['auth/isAuthenticated']) {
        next()
    } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
        next('/auth?message=INVALID_AUTH')
    } else {
        next()
    }
})
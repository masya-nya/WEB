import { createRouter, createWebHistory } from 'vue-router'
import TasksPage from './views/TasksPage'
import PageCreate from './views/PageCreate'
import PageTask from './views/PageTask'
import NotFoundPage from './views/NotFoundPage'


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: TasksPage },
        { path: '/create', component: PageCreate },
        { path: '/task/:taskId?', component: PageTask },
        { path: '/:notFound(.*)', component: NotFoundPage }
    ],
    linkActiveClass: 'activeRoute',
    linkExactActiveClass: 'activeRoute'
}) 
import { createApp } from 'vue'
import App from './App.vue'
import './css/theme-sass'
import { store } from './store'
import { router } from './router'
import Paginate from "vuejs-paginate-next";

createApp(App)
    .use(store)
    .use(router)
    .component('Paginate', Paginate)
    .mount('#app')

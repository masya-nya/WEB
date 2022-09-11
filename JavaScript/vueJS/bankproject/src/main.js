import { createApp } from 'vue'
import App from './App.vue'
import './css/theme-sass.vue'
import { store } from './store/store'
import { router } from './router/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Paginate from "vuejs-paginate-next";

library.add(fas)

createApp(App)
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('Paginate', Paginate)
    .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './components/stylesSCSS'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')

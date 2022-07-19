import { createApp } from 'vue'
import App from './App.vue'
import './components/stylesSCSS'
import store from './store'

createApp(App)
    .use(store) 
    .mount('#app')

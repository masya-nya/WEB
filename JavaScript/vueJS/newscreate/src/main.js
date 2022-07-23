import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './components/stylesSCSS'
import store from './store'

library.add(fas);

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(store)
    .mount('#app')

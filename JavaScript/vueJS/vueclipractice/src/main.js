import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './components/stylesSCSS.vue'

const app = createApp(App)

app.component('async-component', defineAsyncComponent(() => {
    return import('./components/AsyncComponent.vue')
}))
app.mount('#app')

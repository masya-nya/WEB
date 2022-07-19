import { createApp } from 'vue'
import App from './App.vue'
import './components/stylesSCSS.vue'
import translatePlugin from './components/translatePlugin'

const ru = {
    app: {
        title: 'Плагины в Vue',
        button: {
            changeLng: 'Сменить язык',
            modal: 'Открыть модальное окно'
        }
    }
}

const en = {
    app: {
        title: 'How plugins work in Vue',
        button: {
            changeLng: 'Change language',
            modal: 'Open modal window'
        }
    }
}

createApp(App)
    .use(translatePlugin, {ru ,en})
    .mount('#app')

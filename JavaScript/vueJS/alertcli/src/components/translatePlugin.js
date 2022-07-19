export default {
    install(app, options) {
        let current = 'ru'

        const changeLanguage = () => {
            current = current === 'ru' ? 'en' : 'ru'
            // console.log(current)
        }

        console.log('app:', app)
        app.config.globalProperties.$alert = text => {
            window.alert(text)
        }

        app.config.globalProperties.$i18n = key => {
            return key.split('.').reduce((words, k) => {
                return words[k] || '++UNKNOWN++'
            }, options[current])
        }

        app.provide('switchLanguage', changeLanguage)
    }
}
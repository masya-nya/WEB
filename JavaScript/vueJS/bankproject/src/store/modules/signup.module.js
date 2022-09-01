import axios from 'axios'
import { error } from '@/utils/error'
import { store } from '@/store/store'

export default {
    namespaced: true,
    setup() {
        return {

        }
    },
    getters: {

    },
    mitations: {

    },
    actions: {
        async signup(_, user) {
            try {
                const { data } = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FB_KEY}`, 
                {
                    ...user,
                    returnSecureToken: true 
                })
                console.log(data)
            } catch(e) {
                store.commit('messages/addMessage', 
                {
                    message: error(e.response.data.error.message),
                    status: 'warning'
                })
                throw new Error();
            }
        }
    }
}
import { createStore } from 'vuex'
import auth from './modules/auth.module'
import messages from './modules/messages.module' 
import signup from './modules/signup.module' 
import request from './modules/request.module'

export const store = createStore({
    state() {
        return {
        }
    },
    getters: {  
        
    },
    mutations: {
    },
    actions: {

    },
    modules: {
        auth,
        messages,
        signup,
        request
    },
})
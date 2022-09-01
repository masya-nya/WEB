const TOKEN_KEY = 'jwt-token';
import { error } from '@/utils/error';
import axios from 'axios';
import { store } from '@/store/store'

export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    getters: {
        token(state) {
            return state.token;
        },
        isAuthenticated(state) {
            return !!state.token;
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem(TOKEN_KEY, token);
        },
        logout(state) {
            state.token = null;
            localStorage.removeItem(TOKEN_KEY);
        }
    },
    actions: {
        async login({ commit }, user) {
            try {
                const {data} = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`, { ...user, returnSecureToken: true })
                console.log('Data: ', data);
                commit('setToken', data.idToken);
                store.commit('messages/statusChange', false)
            } catch (e) {
                store.commit('messages/addMessage', 
                {
                    message: error(e.response.data.error.message),
                    status: 'warning'
                })
                console.log(e)
                console.log(error(e.response.data.error.message));
                throw new Error();
            }
            
        }
    }
}
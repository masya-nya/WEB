import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            counter: 1
        }
    },
    mutations: {
        inc(state, i) {
            state.counter += i.value
        }
    },
    getters: {
        counter(state) {
            return state.counter
        },
        doubleCounter(_, getters) {
            return getters.counter * 2
        }
    },
    actions: {
        incrAsync(ctx, i) {
            setTimeout(() => {
                ctx.commit('inc', i)
            }, i.delay)
        }
    }
})
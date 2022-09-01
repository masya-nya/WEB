export default {
    namespaced: true,
    state() {
        return {
            messages: JSON.parse(localStorage.getItem('messages')) ?? [],
            isOpen: false
        }
    },
    getters: {
        messages(state) {
            return state.messages;
        },
        isOpen(state) {
            return state.isOpen;
        }
    },
    mutations: {
        addMessage(state, { message, status }) {
            state.messages.push(
            {
                id: state.messages.length,
                status: status,
                text: message
            })
            localStorage.setItem('messages', JSON.stringify(state.messages))
        },
        deleteMessage(state, id) {
            state.messages.splice(state.messages.indexOf(state.messages.find((item) => item.id === id)), 1);
            localStorage.setItem('messages', JSON.stringify(state.messages))
        },
        statusChange(state, value = !state.isOpen) {
            state.isOpen = value;
        }
    },
    actions: {

    }
}
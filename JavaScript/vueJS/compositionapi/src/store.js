import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
    state() {
        return {
            url: 'https://database-masya-default-rtdb.europe-west1.firebasedatabase.app/',
            nameCreate: '',
            deadlineCreate: '',
            descriptionCreate: '',
            allTasks: [],
            deleteIdFocus: '',
            deleteStatus: false
        }
    },
    getters: {
        allTasks(state) {
            return state.allTasks;
        },
        deleteStatus(state) {
            return state.deleteStatus;
        },
        activeCount(state) {
            return state.allTasks.filter(item => item.status.value === 'active').length;
        },
        getUnixRealTime() {
            return parseInt((new Date().getTime() / 1000).toFixed(0))
        },
        getUnixCreateTime(state) {
            return parseInt((new Date(state.deadlineCreate).getTime() / 1000).toFixed(0))
        }
    },
    mutations: {
        restructureFetch(state, data) {
            if(data) {
                state.allTasks = Object.keys(data).map(key => {
                    return {
                        id: key,
                        name: data[key].name,
                        description: data[key].description,
                        deadline: data[key].deadline,
                        status: data[key].status,
                    }
                }).reverse()
            }
        }
    },
    actions: {
        async fetchTasks(ctx) {
            const { data } = await axios.get(ctx.state.url + 'tasks.json')
            ctx.commit('restructureFetch', data)
        },
        async postTask(ctx) {
            const deadline = new Date(ctx.state.deadlineCreate).toLocaleDateString();
            const response = await axios.post(ctx.state.url + 'tasks.json', 
            {
                name: ctx.state.nameCreate,
                deadline: deadline,
                description: ctx.state.descriptionCreate,
                status:  {
                    value: ctx.getters.getUnixCreateTime - ctx.getters.getUnixRealTime > 0 ? 'active' : 'canceled'
                }
            })

            ctx.state.allTasks.unshift({
                id: response.data.name,
                name: ctx.state.nameCreate,
                deadline: deadline,
                description: ctx.state.descriptionCreate,
                status:  {
                    value: ctx.getters.getUnixCreateTime - ctx.getters.getUnixRealTime > 0 ? 'active' : 'canceled'
                }
            })
            ctx.state.nameCreate = '';
            ctx.state.deadlineCreate = '';
            ctx.state.descriptionCreate = '';
        },
        async changeStatus(ctx, {status, id}) {
            ctx.state.allTasks.find(el => el.id === id).status.value = status;
            await axios.put(ctx.state.url + `tasks/${id}/status.json`, {
                value: status
            })
        },
        async deleteTask(ctx) {
            ctx.state.deleteStatus = false;
            ctx.getters.allTasks.splice(ctx.getters.allTasks.indexOf(ctx.getters.allTasks.find(i => i.id === ctx.state.deleteIdFocus)), 1)
            await axios.delete(ctx.state.url + `tasks/${ctx.state.deleteIdFocus}.json`)
        }
    }
})
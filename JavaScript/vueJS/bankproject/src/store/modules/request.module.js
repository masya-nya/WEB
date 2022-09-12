import axios from '@/axios/request';
import { store } from '@/store/store';
import textMap from '@/components/ui/statusObj';
import _ from 'lodash';

export default {
    namespaced: true,
    state() {
        return {
            pageRequests: [],
            requests: [],
            fetchData: [],
            page: 1,
            pageCount: 10,
            pageSize: 6
        }
    },
    getters: {
        requests(state) {
            return state.requests;
        },
        fetchData(state) {
            return state.fetchData;
        },
        pageRequests(state) {
            return state.pageRequests;
        },
        page(state) {
            return state.page;
        },
        getMaxAmount(state) {
            let max;
            state.fetchData.forEach((e, i) => {
                if(i === 0) {
                    max = e.amount
                } else {
                    if(max < e.amount) {
                        max = e.amount
                    }
                }
            });
            return max;
        },
        pageCount(state) {
            return state.pageCount;
        }
    },
    mutations: {
        setRequests(state, requests) {
            if (requests === null) {
                state.requests = [];
            } else {
                let request = Object.keys(requests).map(id => ({...requests[id], id})).reverse()
                this.commit('request/addNums', request)
            }
        },
        pageChangeHandler(state, page) {
            state.pageRequests = state.requests[page - 1] || state.requests[0]
            state.page = page;
        },
        searching(state, { name, status, amount }) {
            const arr = state.fetchData
                .filter( req => {
                    if (name) {
                        return req.name.toLowerCase().includes(name.toLowerCase())
                    }
                    return req
                })
                .filter( req => {
                    if (status && status !== 'base') {
                        return status === req.status
                    }
                    return req
                })
                .filter( req => {
                    if (amount) {
                        return (req.amount >= amount[0] && req.amount <= amount[1])
                    }
                    return req
                })
            state.requests = arr;
            this.commit('request/setupPagination');
        },
        addNums(state, request) {
            let arr = request.map(e => ({...e, num: request.indexOf(e)}))
            state.requests = arr;
            state.fetchData = arr;
        },
        setupPagination(state) {
            state.requests = _.chunk(state.requests, state.pageSize);
            state.pageCount = state.requests.length;
            state.pageRequests = state.requests[state.page - 1] || state.requests[0]
        },
    },
    actions: {
        async create({state, getters, commit }, payload) {
            try {
                const token = store.getters['auth/token']
                const { data } = await axios.post(`/requests.json?auth=${token}`, {...payload, id: getters.requests.length + 1})
                state.fetchData.unshift({...payload, id: data.name });
                commit('addNums', state.fetchData)
                commit('setupPagination')
                store.commit('messages/addMessage', {
                    message: 'Заявка успешно создана.',
                    status: 'primary'
                })
            } catch(e) {
                store.commit('messages/addMessage', {
                    message: e.message,
                    status: 'danger'
                })
            }
        },
        async load({ commit }) {
            try {
                const token = store.getters['auth/token']
                const { data } = await axios.get(`/requests.json?auth=${token}`)
                commit('setRequests', data)
                commit('setupPagination')
            } catch(e) {
                store.commit('messages/addMessage', {
                    message: e.message,
                    status: 'danger'
                })
            }
        },
        async delete({ state: s }, id) {
            try {
                const token = store.getters['auth/token']
                await axios.delete(`/requests/${id}.json?auth=${token}`)
                await s.requests.splice(s.requests.indexOf(s.requests.find(e => e.id = id)), 1)
                store.commit('messages/addMessage', {
                    message: `Заявка ${id} успешно удалена.`,
                    status: 'primary'
                })
            } catch(e) {
                store.commit('messages/addMessage', {
                    message: e.message,
                    status: 'danger'
                })
            }
        },
        async updateStatus(_, { id, status, statusOld }) {
            try {
                const token = store.getters['auth/token']
                await axios.patch(`/requests/${id}.json?auth=${token}`, {
                    status: status
                })

                store.commit('messages/addMessage', {
                    message: `Статус успешно обновлен (${textMap[statusOld]} -> ${textMap[status]}).`,
                    status: 'primary'
                })
            } catch(e) {
                store.commit('messages/addMessage', {
                    message: e.message,
                    status: 'danger'
                })
            }
        },
        async loadRequest(_, id) {
            try {
                const token = store.getters['auth/token']
                const { data } = await axios.get(`/requests/${id}.json?auth=${token}`)
                return data
            } catch(e) {
                store.commit('messages/addMessage', {
                    message: e.message,
                    status: 'danger'
                })
            }
        }
    }
}
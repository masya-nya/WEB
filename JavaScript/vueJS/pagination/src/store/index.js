import { createStore } from 'vuex';
import axios from 'axios';
import _ from 'lodash';

export const store = createStore({
    state() {
        return {
            allPosts: [],
            posts: [],
            fetchData: [],
            page: 1,
            pageCount: 10,
            pageSize: 10,
            modalCreateStatus: false,
            searchValue: '',
            titleCreate: '',
            descriptionCreate: '',
        }
    },
    getters: {
        allPosts(state) {
            return state.allPosts;
        },
        posts(state) {
            return state.posts;
        },
        postsCount(state) {
            return state.pageCount;
        },
        fetchData(state) {
            return state.fetchData;
        },
        page(state) {
            return state.page;
        },
        modalCreateStatus(state) {
            return state.modalCreateStatus;
        }
    },
    mutations: {
        modalCreateStatusChange(state, bool) {
            state.modalCreateStatus = bool;
        },
        takePosts(state, fetchPosts) {
            state.allPosts = fetchPosts;
            state.fetchData = fetchPosts;
        },
        setupPagination(state) {
            state.allPosts = _.chunk(state.allPosts, state.pageSize);
            state.pageCount = state.allPosts.length;
            state.posts = state.allPosts[state.page - 1] || state.allPosts[0]
        },
        pageChangeHandler(state, page) {
            state.posts = state.allPosts[page - 1] || state.allPosts[0]
            state.page = page;
        },
        searching(state) {
            const arr = state.fetchData.filter(item => item.title.includes(state.searchValue) || item.body.includes(state.searchValue));
            state.allPosts = arr;
            this.commit('setupPagination')
        }
    },
    actions: {
        async getPosts({ commit }) {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts') 
            commit('takePosts', data)
            commit('setupPagination')
        },
        async getComments(_, id) {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`) 
            console.log(data)
            return data;
        },
        async deletePost({ state, commit }, id) {
            state.fetchData.splice(state.fetchData.indexOf(state.fetchData.find(item => item.id === id)), 1)
            state.allPosts = state.fetchData;
            commit('setupPagination')
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            console.log(response)
        },
        async createPost({ state: s, commit }) {
            if(s.titleCreate !== '' && s.descriptionCreate !== '') {
                s.fetchData.unshift({
                    body: s.descriptionCreate,
                    title: s.titleCreate,
                    id: s.fetchData.length + 1
                })
                s.allPosts = s.fetchData;
                commit('setupPagination')
                commit('modalCreateStatusChange', false)
                const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, 
                {
                    body: s.descriptionCreate,
                    title: s.titleCreate,
                    id: s.fetchData.length + 1
                })
                console.log(response)
                s.descriptionCreate = '';
                s.titleCreate = '';
            }
        }
    }
}) 
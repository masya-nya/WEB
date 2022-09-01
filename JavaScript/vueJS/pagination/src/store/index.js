import { createStore } from 'vuex';
import axios from 'axios';
import _ from 'lodash';

export const store = createStore({
    state() {
        return {
            allPosts: [],
            posts: [],
            fetchData: [],
            users: [],
            page: 1,
            pageCount: 10,
            pageSize: 10,
            modalCreateStatus: false,
            searchValue: '',
            titleCreate: '',
            descriptionCreate: '',
            userCreate: ''
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
        },
        users(state) {
            return state.users;
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
        takeUsers(state, fetchUsers) {
            state.users = fetchUsers;
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
        async getUsers({ commit }) {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users') 
            commit('takeUsers', data)
        },
        async deletePost({ state, commit }, id) {
            state.fetchData.splice(state.fetchData.indexOf(state.fetchData.find(item => item.id === id)), 1)
            state.allPosts = state.fetchData;
            commit('setupPagination')
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            console.log(response)
        },
        async createPost({ state: s, commit }) {
            s.fetchData.unshift({
                body: s.descriptionCreate,
                title: s.titleCreate,
                id: s.fetchData.length + 1,
                userId: s.users.find(e => e.username === s.userCreate).id
            })
            s.allPosts = s.fetchData;
            commit('setupPagination')
            commit('modalCreateStatusChange', false)
            const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, 
            {
                body: s.descriptionCreate,
                title: s.titleCreate,
                id: s.fetchData.length + 1,
                userId: s.users.find(e => e.username === s.userCreate).id
            })
            console.log(response)
            s.descriptionCreate = '';
            s.titleCreate = '';
        }
    }
}) 
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state() {
        return {
            allPosts: [],
            titleConstructorValue: '',
            descriptionConstructorValue: '',
            editTitleValue: '',
            editDescriptionValue: '',
            editNameValue: '',
            constructorStatus: false,
            editorStatus: false,
            validTitle: false,
            validDescription: false
        }
    },
    mutations: {
        updateNews(state, news) {
            state.allPosts = Object.keys(news).map(key => {
                return {
                    id: key,
                    title: news[key].title,
                    description: news[key].description,
                    time: news[key].time,
                    like: news[key].like
                }
            }).reverse()
        },
        refreshTitle(state) {
            state.titleConstructorValue = '';
        },
        refreshDescription(state) {
            state.descriptionConstructorValue = '';
        },
        constructorStatusChange(state, bool) {
            state.constructorStatus = bool;
        },
        editorStatusChange(state, bool) {
            state.editorStatus = bool;
        },
        editorValueChange(state, {title, description, name}) {
            state.editTitleValue = title;
            state.editDescriptionValue = description;
            state.editNameValue = name;
        }
    },
    getters: {
        allPosts(state) {
            return state.allPosts
        },
        titleConstructorValue(state) {
            return state.titleConstructorValue
        },
        descriptionConstructorValue(state) {
            return state.descriptionConstructorValue
        },
        constructorStatus(state) {
            return state.constructorStatus
        },
        editorStatus(state) {
            return state.editorStatus
        },
        editTitleValue(state) {
            return state.editTitleValue
        },
        editDescriptionValue(state) {
            return state.editDescriptionValue
        },
        getRandomId() {
            return Math.floor(Math.random() * 100000)
        },
        validTitle(state) {
            return state.validTitle
        },
        validDescription(state) {
            return state.validDescription
        }
    },
    actions: {
        async fetchNews(ctx) {
            const { data } = await axios.get('https://data-base-vue-default-rtdb.europe-west1.firebasedatabase.app/news.json')
            ctx.commit('updateNews', data)
        },
        async postNews(ctx) {
            const title = ctx.getters.titleConstructorValue;
            const description = ctx.getters.descriptionConstructorValue;
            ctx.state.validTitle = false;
            ctx.state.validDescription = false;
            
            if(title.length > 50 || title === '') {
                ctx.state.validTitle = true
            } else if(description === '') {
                ctx.state.validDescription = true
            } else {
                const response = await axios.post('https://data-base-vue-default-rtdb.europe-west1.firebasedatabase.app/news.json', {
                    title: title,
                    description: description,
                    time: new Date().toLocaleString(),
                    like: {
                        value: 1,
                        status: false
                    }
                })
                ctx.getters.allPosts.unshift({
                    id: response.data.name,
                    title: title,
                    description: description,
                    time: new Date().toLocaleString(),
                    like: {
                        value: 1,
                        status: false
                    }
                })
                ctx.commit('refreshTitle')
                ctx.commit('refreshDescription')
            }
        },
        async postLike(ctx, name) {
            
            if (ctx.getters.allPosts.filter(i => i.id === name)[0].like.status) {
                ctx.getters.allPosts.filter(i => i.id === name)[0].like.value -= 1;
                ctx.state.allPosts.filter(i => i.id === name)[0].like.status = false;

                const { data } = await axios.get(`https://data-base-vue-default-rtdb.europe-west1.firebasedatabase.app/news/${name}/like.json`)
                await axios.put(`https://data-base-vue-default-rtdb.europe-west1.firebasedatabase.app/news/${name}/like.json`, 
                {
                    value: data.value - 1,
                    status: false,
                })
            } else {
                ctx.getters.allPosts.filter(i => i.id === name)[0].like.value += 1;
                ctx.state.allPosts.filter(i => i.id === name)[0].like.status = true;

                const { data } = await axios.get(`https://data-base-vue-default-rtdb.europe-west1.firebasedatabase.app/news/${name}/like.json`)
                await axios.put(`https://data-base-vue-default-rtdb.europe-west1.firebasedatabase.app/news/${name}/like.json`, 
                {
                    value: data.value + 1,
                    status: true,
                })
            }
        },
        async deletePost(ctx, name) {
            ctx.getters.allPosts.splice(ctx.getters.allPosts.indexOf(ctx.getters.allPosts.filter(i=> i.id === name)[0]), 1)

            await axios.delete(`https://data-base-vue-default-rtdb.europe-west1.firebasedatabase.app/news/${name}.json`)
        },
        async editPost(ctx) {
            const likeValue = ctx.getters.allPosts.filter((i) => i.id === ctx.state.editNameValue)[0].like.value;
            const time = ctx.getters.allPosts.filter((i) => i.id === ctx.state.editNameValue)[0].time;
            const title = ctx.getters.editTitleValue;
            const description = ctx.getters.editDescriptionValue;
            const likeStatus = ctx.getters.allPosts.filter((i) => i.id === ctx.state.editNameValue)[0].like.status
            
            ctx.state.validTitle = false;
            ctx.state.validDescription = false;

            if(title.length > 50 || title === '') {
                ctx.state.validTitle = true
            } else if(description === '') {
                ctx.state.validDescription = true
            } else {
                ctx.state.editTitleValue = '';
                ctx.state.editDescriptionValue = '';
                ctx.state.editorStatus = false;
                ctx.state.allPosts.filter((i) => i.id === ctx.state.editNameValue)[0].title = title;
                ctx.state.allPosts.filter((i) => i.id === ctx.state.editNameValue)[0].description = description;
                

                await axios.put(`https://data-base-vue-default-rtdb.europe-west1.firebasedatabase.app/news/${ctx.state.editNameValue}.json`, 
                {
                    title: title,
                    description: description,
                    time: time,
                    like: {
                        value: likeValue,
                        status: likeStatus
                    }
                })
            }
        }
    }
})
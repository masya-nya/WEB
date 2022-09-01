<template>
    <div class="modal">
        <div class="modal__body">
            <div class="modal__title">Создать пост</div>
            <div class="form-control">
                <label for="user">Комментарий для</label>
                <select id="user" v-model="$store.state.userCreate">
                    <option v-for="user in users" :key="user.id"  :value="user.username"
                    >{{ user.name }}</option>
                </select>
            </div>
            <div class="form-control">
                <label for="title">Заголовок</label>
                <input id="title" type="text" placeholder="Введите заголовок" v-model="$store.state.titleCreate">
            </div>
            <div class="form-control">
                <label for="description">Текст</label>
                <textarea id="description" rows="5" type="text" placeholder="Введите описание" v-model="$store.state.descriptionCreate"></textarea>
            </div>
            <div class="btns">
                <button class="btn" @click="$store.dispatch('createPost')">Создать</button>
                <button class="btn danger" @click="$store.commit('modalCreateStatusChange', false)">Отмена</button>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue'
export default {
    setup() {
        const store = useStore();

        return {
            users: computed(() => store.getters.users)
        }
    }
}
</script>

<style scoped>
.btns {
    display: flex;
    justify-content: space-between;
}
</style>
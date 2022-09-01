<template>
    <div class="form-control">
        <input type="text" placeholder="Поиск..." @input="search" v-model="$store.state.searchValue">
    </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        const search = () => {
            store.commit('searching')
        }


        return {
            search
        }
    }
}
</script>

<style scoped>
.form-control {
    width: 100%;
    margin: 0 20px 0 0;
}
</style>
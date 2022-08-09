<template>
    <div class="create">
        <div class="create__title">
            Создать новую задачу
        </div>
        <form class="form-control" @submit.prevent="submit">
            <label for="date456457">Название</label>
            <input type="text" id="date456457" v-model="$store.state.nameCreate">
            <label for="date456456">Дата дедлайна</label>
            <input type="date" id="date456456" v-model="$store.state.deadlineCreate">
            <label for="date456455">Описание</label>
            <textarea id="date456455" rows="5" v-model="$store.state.descriptionCreate"></textarea>
            <button 
                type="submit" class="btn"
                :disabled="!validation"
            >Создать</button>
        </form>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed } from 'vue'


export default {
    setup() {
        const store = useStore();
        const router = useRouter();

        const validation = computed(() => 
        store.state.nameCreate !== '' && 
        store.state.descriptionCreate !== '' && 
        store.state.deadlineCreate !== '' && 
        store.state.nameCreate.length < 45
        )

        function submit() {
            store.dispatch('postTask')
            router.push('/')
        }
        
        return {
            submit,
            validation
        }
    }
}
</script>
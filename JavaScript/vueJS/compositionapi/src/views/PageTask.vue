<template>
    <div class="task" v-if="task.name">
        <div class="task__title">
            {{ task.name }}
        </div>
        <hr>
        <div class="task__status">
            <strong>Статус: </strong> 
            <app-status-item
                :type="task.status.value"
            ></app-status-item>
        </div>
        <div class="task__deadline">
            <strong>Дэдлайн: </strong>
            {{ task.deadline }}
        </div>
        <div class="task__description">
            <strong>Описание: </strong>
            {{ task.description }}
        </div>
        <div class="task__btns">
            <div class="task__btns-left">
                <button class="btn warning"
                    :disabled="task.status.value === 'canceled'"
                    @click="status('inWork')"
                >Взять в работу</button>
                <button class="btn primary"
                    :disabled="task.status.value === 'canceled'"
                    @click="status('done')"
                >Завершить</button>
                <button class="btn normal"
                    :disabled="task.status.value === 'canceled'"
                    @click="status('active')"
                >Сделать активной</button>
            </div>
            <div class="task__btns-right">
                <button class="btn"
                    @click="back"
                >Назад</button>
            </div>
        </div>
    </div>
    <div class="card" v-else>
        <div class="card__title">
            Задачи с адресом "{{ taskAdress }}" не найдено
        </div>
    </div>
    
</template>
<script>
import AppStatusItem from '@/components/AppStatusItem.vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        
        const taskAdress = computed(() => route.params.taskId)
        const task = computed(() => store.state.allTasks.find(e => e.id === route.params.taskId) || { name: '', status: {value: ''}})
        const status = (status) => {
            store.dispatch('changeStatus', { status, id: route.params.taskId })
        }

        const back = () => {
            router.push('/')
        }

        return {
            task,
            back,
            status,
            taskAdress
        }
    },
    components: {AppStatusItem}
}
</script>
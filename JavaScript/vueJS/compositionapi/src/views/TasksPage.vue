<template>
    <div v-if="allTasks.length">
        <div class="card__title">Всего активных задач: {{ activeCount }}</div>
        <app-task-item
            v-for="task in allTasks" :key="task.id"
            :name="task.name"
            :description="task.description"
            :deadline="task.deadline"
            :status="task.status.value"
            :id="task.id"
        ></app-task-item>
    </div>
    <div class="card" v-else>
        <h1 class="task__title">
            Активных задач нет, время создать новую
        </h1>
    </div>
    <div class="modal" v-if="deleteStatus">
        <div class="modal-delete">
            <div class="modal__title">
                Удалить "{{ deleteNameFocus }}"?
            </div>
            <div class="modal__btns">
                <button class="btn" 
                    @click="deleteTask"
                >Да</button>
                <button class="btn danger"
                    @click="cancel"
                >Нет</button>
            </div>
        </div>
    </div>
</template>
<script>
import AppTaskItem from "@/components/AppTaskItem.vue";
import { mapGetters, mapState } from "vuex";

export default {
    data() {
        return {
            
        }
    },
    methods: {
        cancel() {
            this.$store.state.deleteStatus = false;
        },
        deleteTask() {
            this.$store.dispatch('deleteTask')
        }
    },
    computed: {
        ...mapState(['deleteNameFocus']),
        ...mapGetters(['allTasks', 'activeCount', 'deleteStatus'])
        
    },
    components: {AppTaskItem} 
}
</script>
<style scoped>
.card__title {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    margin: 0 0 20px 0;
}
</style>
<template>
    <div class="card">
        <div class="card__top">
            <h2 class="card__title">
                {{ name }}
            </h2>
            <app-status-item
                :type="status"
            ></app-status-item>
        </div>
        <hr>
        <div class="card__bottom">
            <div class="card__deadline">
                Дэдлайн - {{ deadline }}
            </div>
            <div class="card__description">
                {{ description }}
            </div>
            <div class="card__btns">
                <button class="btn"
                    @click="openTask"
                >Посмотреть</button>
                <span class="card__btns-close"
                    @click="deleteTask"
                >&#10006;</span>
            </div>
        </div>
    </div>
</template>
<script>
// import { ref } from 'vue'
import AppStatusItem from './AppStatusItem.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
 
export default {
    props: {
        name: String,
        description: String,
        status: String,
        deadline: String,
        id: String
    },
    setup(prop) {
        const store = useStore();
        const router = useRouter();
        
        const openTask = () => {
            router.push('/task/' + prop.id)
        }
        const deleteTask = () => {
            store.state.deleteStatus = true;
            store.state.deleteNameFocus = prop.name;
            store.state.deleteIdFocus = prop.id;
        }

        return {
            openTask,
            deleteTask
        }
    },
    components: {AppStatusItem}
}
</script>
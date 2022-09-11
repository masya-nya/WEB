<template>
    <the-loader
        v-if="loading"
    ></the-loader>
    <app-page title="Список заявок" v-else>

        <template #header>
            <button class="btn" @click="modalViewChange(true)">Создать</button>
        </template>

        <request-filter
        ></request-filter>

        <request-table
            :requests="requests"
        ></request-table>

        <paginate
            v-if="requests.length !== 0"
            v-model="page"
            :page-count="pageCount"
            :click-handler="pageChangeHandler"
            :prev-text="'Назад'"
            :next-text="'Вперед'"
        ></paginate>

        <teleport to="body">
            <app-modal v-if="modal"
                title="Создать заявку"
                @close="modalViewChange(false)"
            >
                <request-modal
                    @created="modalViewChange(false)"
                ></request-modal>
            </app-modal>
        </teleport>

    </app-page>
</template>

<script>
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex';
import AppPage from '../components/ui/AppPage.vue';
import RequestTable from '@/components/request/RequestTable.vue';
import RequestModal from '@/components/request/RequestModal.vue';
import RequestFilter from '@/components/request/RequestFilter.vue';
import AppModal from '@/components/ui/AppModal.vue';
import TheLoader from '@/components/ui/TheLoader.vue';

export default {
    setup() {
        const store = useStore();
        const modal = ref(false)
        const loading = ref(true)

        onMounted(async () => {
            loading.value = true;
            await store.dispatch('request/load')
            loading.value = false;
        })

        const pageChangeHandler = (page) => {
            store.commit('request/pageChangeHandler', page)
        }

        const requests = computed(() => store.getters['request/pageRequests'] || [])


        return {
            modal,
            modalViewChange: (bool) => modal.value = bool,
            requests,
            loading,
            pageCount: computed(() => store.getters['request/pageCount']),
            pageChangeHandler,
            page: computed(() => store.getters['request/page'])
        }
    },
    components: {
        AppPage,
        RequestTable, 
        AppModal, 
        RequestModal, 
        TheLoader,
        RequestFilter
    }
}
</script>

<style>

</style>
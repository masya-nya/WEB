<template>
    <app-page
        title="Список задач"
    >
    <template #header>
        <button class="btn" @click="modalViewChange(true)">Создать</button>
    </template>

    <request-table
        :requests="[]"
    ></request-table>

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
import { ref } from 'vue'
import AppPage from '../components/ui/AppPage.vue';
import RequestTable from '@/components/request/RequestTable.vue';
import RequestModal from '@/components/request/RequestModal.vue';
import AppModal from '@/components/ui/AppModal.vue';

export default {
    setup() {
        const modal = ref(false)

        return {
            modal,
            modalViewChange: (bool) => modal.value = bool,
        }
    },
    components: {AppPage, RequestTable, AppModal, RequestModal}
}
</script>

<style>

</style>
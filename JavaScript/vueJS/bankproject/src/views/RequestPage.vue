<template>
    <the-loader
        v-if="loading"
    ></the-loader>
    <app-page title="Заявка" :toHome="true" v-else-if="request">

        <div class="request">

            <div class="request__name">
                <strong>Имя владельца:</strong> {{ request.name }}
            </div>
            <div class="request__phone">
                <strong>Телефон:</strong> {{ request.phone }}
            </div>
            <div class="request__amount">
                <strong>Сумма заявки:</strong> {{ currency(request.amount) }}
            </div>
            <div class="request__status">
                <strong>Статус заявки: </strong> <app-status
                    :type="request.status"
                ></app-status>
            </div>

            <div class="form-control">
                <select v-model="statusV">
                    <option disabled selected value="base">Статус</option>
                    <option value="done">Завершен</option>
                    <option value="active">Активен</option>
                    <option value="canceled">Отменен</option>
                    <option value="pending">Выполняется</option>
                </select>
            </div>

            <div class="request__btns">
                <button v-if="hasChanges" class="btn" @click="refreshRequest">Обновить</button>
                <button class="btn danger" @click="deleteRequest">Удалить</button>
            </div>
            
        </div>

    </app-page>
    <app-page 
        v-else 
        :title="`Заявки с ID='${$route.params.requestId}' не существует`"
    ></app-page>
    
</template>

<script>
import AppPage from '@/components/ui/AppPage.vue';
import TheLoader from '@/components/ui/TheLoader.vue';
import AppStatus from '@/components/ui/AppStatus.vue';
import { currency } from '@/utils/currency-formatter'
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        const loading = ref(true)
        const request = ref({})
        const statusV = ref('base')

        const refreshRequest = async () => {
            await store.dispatch('request/updateStatus', 
            {
                id: route.params.requestId,
                status: statusV.value,
                statusOld: request.value.status
            })
            request.value.status = statusV.value;
        }
        const deleteRequest = async () => {
            await store.dispatch('request/delete', route.params.requestId)
            router.push('/')
        }

        onMounted(async () => {
            loading.value = true;
            request.value = await store.dispatch('request/loadRequest', route.params.requestId)
            loading.value = false;
            statusV.value = request.value.status;
        })

        const hasChanges = computed(() => request.value.status !== statusV.value)

        return {
            request,
            loading,
            currency,
            refreshRequest,
            deleteRequest,
            statusV,
            hasChanges
        }
    },
    components: { AppPage, TheLoader, AppStatus }
}
</script>

<style>

</style>
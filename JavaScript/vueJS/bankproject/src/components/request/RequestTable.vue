<template>
    <h2 v-if="requests.length === 0">Заявок пока что нет</h2>
    <table v-else class="table">
        <thead>
            <tr class="table-title">
                <th>№</th>
                <th>ФИО</th>
                <th>Телефон</th>
                <th>Сумма</th>
                <th>Статус</th> 
            </tr>
        </thead>
        <tbody>
            <tr v-for="r in requests" :key="r.id">
                <td>{{ r.num + 1 }}</td>
                <td>{{ r.name }}</td>
                <td>{{ r.phone }}</td>
                <td>{{ currency(r.amount) }}</td>
                <td>
                    <app-status
                        :type="r.status"
                    ></app-status>
                </td>
                <td>
                    <button class="btn primary" @click="$router.push(`/request/${r.id}`)">Открыть</button>
                    <!-- <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: r.id}}">
                        <button class="btn">Открыть</button>
                    </router-link> -->
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import AppStatus from '../ui/AppStatus.vue';
import { currency } from '@/utils/currency-formatter';

export default {
    props: ['requests'],
    setup() {

        return {
            currency
        }
    },
    components: {AppStatus}
}
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 16px;
}
</style>
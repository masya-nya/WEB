<template>
    <form class="form-modal" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="name">ФИО</label>
            <input :class="[{invalid: nameE}]" placeholder="Иванов Иван Иванович" type="text" id="name" v-model="nameV" @blur="nameB">
            <small class="danger" v-if="nameE">{{ nameE }}</small>
        </div>
        <div class="form-control">
            <label for="phone">Телефон</label>
            <input v-maska="'+7(###)###-####'" placeholder="+7(999)777-77-77" :class="[{invalid: phoneE}]" type="tel" id="phone" v-model="phoneV" @blur="phoneB">
            <small class="danger" v-if="phoneE">{{ phoneE }}</small>
        </div>
        <div class="form-control">
            <label for="amount">Сумма заявки</label>
            <input :class="[{invalid: amountE}]" type="number" id="amount" v-model="amountV" @blur="amountB">
            <small class="danger" v-if="amountE">{{ amountE }}</small>
        </div>
        <div class="form-control">
            <label for="status">Статус заявки</label>
            <select id="status" v-model="statusV">
                <option value="done">Завершен</option>
                <option value="canceled">Отменен</option>
                <option value="active">Активен</option>
                <option value="pending">Выполняется</option>
            </select>
        </div>
        <button class="btn" type="submit" :disabled="isSubmitting">Создать</button>
    </form>
</template>

<script>
import { useRequestFrom } from '@/use/request-form';
import { useStore } from 'vuex';
import { maska } from 'maska'

export default {
    emits: ['created'],
    setup(_, { emit }) {
        const store = useStore();
        const submit = async values => {
            await store.dispatch('request/create', values)
            console.log(values)
            emit('created')
        }

        return { ...useRequestFrom(submit) }
    },
    directives: { maska }
}
</script>

<style>

</style>
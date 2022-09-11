<template>
    <div class="filter">
        <div class="form-control">
            <input v-model="name" type="text" placeholder="Имя">
        </div>
        <div class="form-control">
            <select v-model="status">
                <option disabled selected value="base">Статус</option>
                <option value="done">Завершен</option>
                <option value="active">Активен</option>
                <option value="canceled">Отменен</option>
                <option value="pending">Выполняется</option>
            </select>
        </div>
        <div class="form-control">
            <Slider 
                v-model="sliderV"
                :max="maxV"
            ></Slider>
        </div>
        <button class="btn primary" @click="clearFilter">Очистить</button>
    </div>
</template>

<script>
import { store } from '@/store/store';
import Slider from '@vueform/slider';
import { computed, ref, watch } from 'vue';

export default {
    setup() {
        const sliderV = ref([0, 10000000000])
        const name = ref()
        const status = ref('base')

        const maxV = computed(() => store.getters['request/getMaxAmount'])

        const clearFilter = () => {
            sliderV.value = [0, 10000000000];
            name.value = '';
            status.value = 'base';
        }

        watch([name, status, sliderV], values => {
            store.commit('request/searching', {
                name: values[0],
                status: values[1],
                amount: values[2]
            })
        })

        return {
            sliderV,
            maxV,
            name,
            status,
            clearFilter
        }
    },
    components: { Slider }
}
</script>

<style  src="@vueform/slider/themes/default.css">

</style>
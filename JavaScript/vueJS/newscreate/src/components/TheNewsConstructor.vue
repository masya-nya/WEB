<template>
    <div class="constructor">
        <form class="constructor__container"
              v-if="constructorStatus" 
              @submit.prevent="postNews"> 
            <div class="constructor__title">
                Create News
            </div>
            <fa icon="fa-solid fa-xmark"
                    class="fa constructor-exit exit"
                    @click="constructorStatusChange(false)"/>
            <div class="constructor__body">
                <app-input
                    :labelValue="'Title'"
                    :type="'text'"
                ></app-input>
                <app-textarea
                    :labelValue="'Description'"
                    :type="'text'"
                ></app-textarea>
            </div>
            <div class="constructor__btns">
                <button class="btn" type="submit" >add</button>
            </div>
        </form>
        <div v-else>
            <h2 class="constructor__title">Create news</h2>
            <button class="btn"
                    @click="constructorStatusChange(true)"
                    >Open constructor</button>
        </div>
    </div>
</template>
<script>
import AppInput from './AppInput.vue'
import AppTextarea from './AppTextarea.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    components: {
        AppInput,
        AppTextarea
    },
    computed: {
        ...mapGetters(['constructorStatus'])
    },
    methods: {
        ...mapMutations(['constructorStatusChange']),
        ...mapActions(['postNews'])
    }
}
</script>
<style scoped>
h2 {
    margin: 0 0 20px 0;
}
</style>

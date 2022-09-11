<template>
    <the-loader v-if="loading"
    ></the-loader>
    <app-page
        title="Вопросы"
        :toHome="false">

        <question-item v-for="quest in questions" :key="quest.title"
            :quest="quest"
        ></question-item>

    </app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage.vue';
import TheLoader from '@/components/ui/TheLoader.vue';
import questions from '@/utils/questions';
import QuestionItem from '@/components/question/QuestionItem.vue';
import { ref } from 'vue';
export default {
    setup() {
        const loading = ref(false)



        return {
            loading,
            questions
        }
    },
    components: {AppPage, TheLoader, QuestionItem}
}
</script>

<style>

</style>
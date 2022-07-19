<template>
    <div v-if="email">
        <h2>{{ email.theme }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, aperiam. Maxime ipsa nam beatae! Corrupti aperiam eligendi obcaecati suscipit nemo.</p>
        <button class="btn primary" @click="$router.push('/mail')">Закрыть</button>
    </div>
    <div v-else>
        <h2>Выберите письмо</h2>
    </div>
</template>
<script>
export default {
    inject: ['emails'],
    props: ['mailId'],
    computed: {
        email() {
            return this.emails.find(e => e.id === +this.mailId)
        }
    }
}
</script>
<style scoped>
h2 {
    font-size: 26px;
    font-weight: 700;
    margin: 0 0 20px 0;
}
p {
    font-size: 16px;
    margin: 0 0 30px 0;
}
</style>
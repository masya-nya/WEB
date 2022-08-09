<template>
    <header class="navbar">
        <h1 class="card__title" @click="$router.push('/')">Задачник</h1>

        <ul class="navbar__menu">
            <li class="navbar__menu-item">
                <router-link to="/">Все задачи</router-link>
            </li>
            <li class="navbar__menu-item">
                <router-link to="/create">Создать</router-link>
            </li>
        </ul>
    </header>
</template>
<style scoped>
    .card__title {
        cursor: pointer;
    }
</style>
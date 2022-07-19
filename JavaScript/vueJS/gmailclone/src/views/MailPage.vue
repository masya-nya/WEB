<template>
    <div class="app__item card">
        <div class="card-nav">
            <ul class="list">
                <li class="list-item" v-for="email in emails" :key="email.id">
                    <router-link  :to="'/mail/' + email.id">
                        {{ email.theme }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
  // components: {AppEmailBody},
  inject: ['emails'],
  components: {
  }
}
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: row;
  }

  .card.no-padding {
    padding: 0;
  }

  .card-nav {
    max-width: 350px;
    min-width: 300px;
    border-right: 1px solid #999999;
  }

  .card-body {
    padding: 0 1rem;
  }
  .list-item {
    cursor: pointer;
    width: 100%;
  }

  .list-item a {
    display: block;
    color: #2c3e50;
    font-size: 18px;
    padding: 10px 15px;
    width: 100%;
}
.list-item a:hover {
    background-color: #eee;
    color: #219154;
}

.list-item a.active {
    color: #3eaf7c;
    font-weight: bold;
}
.page-active {
    border-bottom: 0px solid #fff;
    background-color: #eee;
}
</style>
<template>
    <div class="input23423" >
        <label :for="'name' + getRandomId">
            {{ labelValue }}
        </label>
        <input type="text" :id="'name' + getRandomId" 
               v-model="$store.state.titleConstructorValue">
        <p class="validate-p" v-if="validTitle">Not valid title</p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        labelValue: {
            type: String,
            required: true,
            default: 'label'
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
        }
    },
    computed: {
        ...mapGetters(['getRandomId', 'validTitle'])
    }
}
</script>

<style scoped>
.input23423 {
    display: flex;
    flex-direction: column;
}
.input23423 >:not(:last-child) {
    margin: 0 0 10px 0
}
input {
    border: 1px solid #213462;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 18px;
}
label {
    font-size: 18px;
    font-weight: 700;
}
</style>
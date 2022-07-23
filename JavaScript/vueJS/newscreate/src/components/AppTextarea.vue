<template>
    <div class="input23423" >
        <label :for="'name' + getRandom">
            {{ labelValue }}
        </label>
        <textarea :id="'name' + getRandom" name="story"
                  rows="5" 
                  v-model="$store.state.descriptionConstructorValue">
        </textarea>
        <p class="validate-p" v-if="validDescription">Not valid description</p>
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
        }
    },
    computed: {
        ...mapGetters(['getRandomId', 'validDescription'])
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
textarea {
    border: 1px solid #213462;
    padding: 10px 20px;
    resize: none;
    border-radius: 5px;
    font-size: 16px;
}
label {
    font-size: 18px;
    font-weight: 700;
}
</style>
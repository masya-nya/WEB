<template>
    <div class="modal-editor">
        <form class="modal-editor__body" @submit.prevent="editPost">
            <div class="modal-editor__input">
                <label for="52dsf34">Title</label>
                <input type="text" id="52dsf34" v-model="$store.state.editTitleValue">
                <p class="validate-p" v-if="validTitle">Not valid title</p>
            </div>
            <div class="modal-editor__textarea">
                <label for="63ewrt45">Description</label>
                <textarea id="63ewrt45" rows="10" v-model="$store.state.editDescriptionValue"></textarea>
                <p class="validate-p" v-if="validDescription">Not valid description</p>
            </div>
            <div class="modal-editor__btns">
                <button class="btn" type="submit">Confirm changes</button>
                <button class="btn warning"
                        @click="editorStatusChange(false)"
                >Cancel</button>
            </div>

        </form>
    </div>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
    methods: {
        ...mapMutations(['editorStatusChange']),
        ...mapActions(['editPost'])
    },
    computed: {
        ...mapGetters(['editTitleValue', 
        'editDescriptionValue',
        'validTitle',
        'validDescription'])
    }
}
</script>
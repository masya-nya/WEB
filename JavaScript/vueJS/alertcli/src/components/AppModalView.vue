<template>
    <div class="modal" @click.self="$emit('close')">
        <div 
            class="modal__body" 
            >
                <h3 class="modal__title">Заголовок модалки</h3>
                <p class="modal__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas magni maxime repudiandae. Hic voluptates repellendus laudantium delectus architecto, nobis provident!</p>
        </div>
    </div>
</template>   
<script>
export default {
    emits: ['close']
}
</script>
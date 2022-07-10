<template>
    <div class="app__card">
        <ul>
            <li v-for="(item, i) in 5" :key="i">
                <slot :iter="item" 
                      :idx="i"
                ></slot>
            </li>
        </ul>
    </div>
</template>
<!-------------------------------------------------------------------------------------->
<script>
export default {
    
}
</script>
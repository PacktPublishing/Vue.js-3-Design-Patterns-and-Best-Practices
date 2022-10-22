<script setup>
    import HeaderH1 from "./decorator-1.vue"
    const $props=defineProps(["label"])
</script>

<template>
    <div style="color: purple;">
        <HeaderH1 :title="$props.label+"!!!""></HeaderH1>
    </div>    
</template>

<style scoped>
    
</style>
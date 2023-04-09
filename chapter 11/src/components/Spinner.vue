<script setup>
/**
 * Simple CSS only spinner with caption

  Usage:
        <Spinner caption="some text"></Spinner>
 */
const $props=defineProps(['caption'])
</script>

<template>
    <div>
        <span class="spinner"></span>
        {{ $props.caption }}
    </div>    
</template>

<style scoped>
.spinner{
    display: inline-block;
    height: 1rem;
    width: 1rem;
    border: 2px solid;
    vertical-align: middle;
    border-radius: 50%;
    border-top-color: #06c9c9;
    animation: rotate 1s linear infinite;
}

@keyframes rotate {
    0%{ transform: rotate(0deg);}
    100%{transform: rotate(360deg);}    
}
    
</style>
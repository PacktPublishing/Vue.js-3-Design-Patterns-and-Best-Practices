<script setup>
const
    $props=defineProps(['counter', 'title']),
    $emit=defineEmits(['increment'])

function incrementCounter(){
    $emit("increment")
}
</script>

<template>
<div class="child-component padding">
    <div>
        <h3>{{$props.title}}</h3>
        <strong>Shared counter </strong>
        <span class="badge">{{$props.counter}}</span>
    </div>
    <div>
    <button @click="incrementCounter()">Increment</button>
    </div>
</div>    
</template>

<style scoped>
.child-component{
    background-color: var(--shadow);
    display: flex;
    gap: var(--padding);
    align-items: center;
}


</style>
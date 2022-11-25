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
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    gap: var(--padding);
    align-items: center;
}


</style>
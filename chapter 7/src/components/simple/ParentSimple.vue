<script setup>
import useState from '../../services/SimpleState';
import ChildVue from './ChildSimple.vue';

const
    state = useState()

</script>

<template>
<div>
    <p>With composables and Vue 3 reactivity, we can create a centralized reactive state.</p>
    <div class="padding with-background">
        <strong>Parent component</strong>

        <div class="semi-padding flex-container">
            <strong>State: </strong>
            <pre>{{ state }}</pre>
        </div>


        <div class="flex-container">
            <ChildVue></ChildVue>
            <ChildVue></ChildVue>
            <ChildVue></ChildVue>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>
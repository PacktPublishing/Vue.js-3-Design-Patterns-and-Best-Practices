<script setup>
import {ref, watch} from "vue"
import locationService from "../services/locationService"

const
    $props=defineProps(["country"]),
    _states=ref(locationService.getStatesByCountry($props.country))

watch(()=>$props.country, ()=>{
    _states.value=locationService.getStatesByCountry($props.country)
})
</script>

<template>
<div class="wrapper">
    <section>
        <h3>State / Province ({{_states.length}})</h3>
        <hr>
        <div v-for="s in _states" :key="s">
            <RouterLink :to="{name:'cities', params:{ state:s}}" active-class="selected">
                {{s}}
            </RouterLink>
        </div>
    </section>
    <RouterView></RouterView>
</div>
</template>

<style scoped>
div.wrapper{
    display: grid;
    grid-template-columns: 12rem auto;
}
section{
    padding: 1rem;
    background-color: rgba(80,80,100,0.2);
}
</style>
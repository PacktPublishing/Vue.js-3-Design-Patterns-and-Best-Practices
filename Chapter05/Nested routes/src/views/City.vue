<script setup>
import {ref, watch} from "vue"
import locationService from "../services/locationService"

const
    $props=defineProps(["country","state"]),
    _cities=ref(locationService.getCitiesByCountryAndState($props.country, $props.state)),
    _city=ref({})


watch(()=>$props.state, ()=>{
    _cities.value=locationService.getCitiesByCountryAndState($props.country, $props.state)
})

function select(city){
    _city.value=city;
}
</script>

<template>
    <div class="wrapper">
        <section>
        <h3>Cities ({{_cities.length}})</h3>
        <hr>
        <a v-for="c in _cities" :key="c.city+c.state" 
            :class="{'selected': _city==c}"
            @click="select(c)">
            {{c.city}}
        </a>
        </section>
        <section>
            <h3>City selected</h3>
            <hr>
            <div v-show="_city.city!=undefined">
                    {{_city.city}}, {{_city.state}}, {{$props.country}}
            </div>
        </section>
    </div>
</template>

<style scoped>
div.wrapper{
    display: grid;
    grid-template-columns: 12rem auto;
}
section{
    padding: 1rem;
}
a{
    display: block;
}
</style>
<script setup>
/**
   A component that receives an integer as prop, and calculates the 
   Fibonacci result and displays it.

 */
import { computed } from "vue"
import fibService from "../services/Fibonacci"

const
    $props=defineProps({
        number:{type: Number, default: 0}
    })

const 
    _result=computed(()=>{
        return fibService.Fibonacci($props.number)
    })
</script>

<template>
<h3>
    Result: <span>{{ _result }}</span> 
</h3>
</template>

<style scoped>

</style>
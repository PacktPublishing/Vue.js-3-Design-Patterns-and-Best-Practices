<script setup>
import {ref, onMounted} from "vue"
const
    $props=defineProps(["modelValue"]),
    $emit=defineEmits(["update:modelValue"]),
    _value=ref("")

onMounted(()=>{
    _value.text=$props.modelValue;
})

function clear(){
    _value.value="";
    publishValue()
}

function publishValue(){
    $emit("update:modelValue", _value.value)
}

    
</script>

<template>
    <div class="flex-container w3-border">
        <input  type="text" 
                class="w3-input w3-border-0" 
                v-model="_value"
                @keyup="publishValue()"
                placeholder="Enter filter text here..."
                >
        <button class="w3-border-0" @click="clear()">
            <i class="fas fa-fw fa-times"></i>
        </button>
    </div>
</template>

<style scoped>
    
</style>
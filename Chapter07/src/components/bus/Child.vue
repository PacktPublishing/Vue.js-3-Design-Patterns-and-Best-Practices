<script setup>
import MessageBus from '../../services/MessageBus';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const
    $props=defineProps(['title']),
    message=ref("''")

onMounted(()=>{
    MessageBus.on("message", showMessage)
})

onBeforeUnmount(()=>{
    MessageBus.off("message", showMessage)
})

function showMessage(value){
    message.value=value;
}

function sendMessage(){
    MessageBus.emit("message", `Sent by ${$props.title}`)
}
    
</script>

<template>
<div class="item padding">
    <h4>{{$props.title}}</h4>
    <div>
        <strong>Received: </strong>
        <div>
        {{message}}
        </div>
    </div>
    <div class="semi-padding">
    <button @click="sendMessage()">Send message</button>
    </div>
</div>
</template>

<style scoped>
.item{
    background-color: var(--shadow);
    flex-grow: 1;
}
</style>
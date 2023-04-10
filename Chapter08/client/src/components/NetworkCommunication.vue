<script setup>
import webWorker from "../services/WebWorker"
import { ref } from "vue"

const
    _data_to_send = ref(""),
    _data_received = ref(""),
    _method = ref("GET")

function sendData(){
    webWorker
        .request(_method.value, {url:"/api/test", data: _data_to_send.value})
        .then(reply=>{
            _data_received.value=reply
        },()=>{
            _data_received.value="Error in communication"
        })
}
</script>

<template>
    <div class="padded network-wrapper">
        <section>
            <h4>Text to send</h4>
            <div class="padded flex-container gap">
                <label>
                    <input type="radio" value="GET" name="method" v-model="_method">
                    <span>GET Method</span>
                </label>
                <label>
                    <input type="radio" value="POST" name="method" v-model="_method">
                    <span>POST Method</span>
                </label>
            </div>
            <div class="flex-container">
                <input type="text" v-model="_data_to_send" placeholder="Type text to mirror...">
                <button @click="sendData()">Send</button>
            </div>
        </section>

        <section>
            <h4>Data received from server</h4>
            <div class="padded data-mirror">
                {{ _data_received }}
            </div>
        </section>
    </div>

</template>

<style scoped>
.network-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.data-mirror{
    padding: var(--padding);
    border: 1px solid var(--gray);
    min-height: 6rem;
}
</style>
<script setup>
/**
    A basic example of the front end needed to implement an email OTP
    workflow.
    This template needs a backend server and additional validation code to work when implemented.
 */
import axios from "axios"
import { ref } from "vue"

const
    _user_email = ref(""),
    _wait_seconds = ref(0),
    _show_input_code = ref(false),
    _otp_code = ref("")

function signInUser() {
    axios
        .post("https://requestOTP_url", { email: _user_email.value })
        .then(result => {
            _wait_seconds.value = result.data.wait_time;
            _show_input_code.value = true;
            startOTPtimer();
        }).catch(err => {
            console.log(err.message)
        })
}

function startOTPtimer() {
    let interval_id = setInterval(() => {
        if (_wait_seconds.value > 0) { 
            _wait_seconds.value--; 
        }else { 
            clearInterval(interval_id); 
        }
    }, 1000)
}

function checkOTP() {
    axios.post("https://validateOTP_URL",{code:_otp_code.value})
   .then(result => {
        if (result.status > 200 && result.status < 300) {
            // User validated, proceed to protected route 
            // for example, using $router.push(...)
        } else {
            // Validation failed. Redirect to error route 
        }
    }).catch(err => {
         console.log(err)
    }) 
} 
</script>

<template>
<section>

    <!-- Email input -->
    <div v-show="!_show_input_code">
        <input type="email" v-model="_user_email">
        <button @click="signInUser()">Submit</button>
    </div>

    <!-- Show code form -->
    <div v-show="_show_input_code">
        <input type="text" v-model="_otp_code">
        <button @click="checkOTP()">Submit</button>
        <hr>
        <p>
            You have {{_wait_seconds}} seconds before the code expires.
        </p>
    </div>

</section>

</template>

<style scoped>

</style>

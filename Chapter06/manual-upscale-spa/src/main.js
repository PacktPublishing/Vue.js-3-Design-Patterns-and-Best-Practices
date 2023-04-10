import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Check if browser supports service workers
if(navigator.serviceWorker){
    navigator.serviceWorker.register("/service_worker.js");
}

createApp(App).mount('#app')

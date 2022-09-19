import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Modals from "./plugins/modals"

createApp(App)
    .use(Modals)
    .mount('#app')

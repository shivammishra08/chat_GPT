import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import cors from 'cors'

import './assets/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App)
            .use(router)
            .use(cors)

app.mount('#app')

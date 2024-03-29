import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import prismic from './prismic'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(prismic)

app.mount('#app')

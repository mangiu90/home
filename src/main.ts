import { createApp } from 'vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(VueSmoothScroll)
    .use(createPinia())
    .mount('#app')

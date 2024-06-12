import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import Aura from '@/presets/aura'

const app = createApp(App)
app.use(PrimeVue, {
  unstyled: true,
  pt: Aura
})

app.use(createPinia())
app.use(router)

app.mount('#app')

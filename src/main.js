import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers.js'

createApp(App).use(routers).mount('#app')

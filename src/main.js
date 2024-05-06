import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Added
import axios from 'axios'

// Added
axios.defaults.baseURL = 'http://127.0.0.1:8000'

// Modified
createApp(App).use(store).use(router, axios).mount('#app')

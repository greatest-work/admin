import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import api from '@/apis'
console.log(api);
createApp(App).use(router).provide('api', api).mount('#app')

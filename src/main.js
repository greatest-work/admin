import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import api from '@/apis';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
createApp(App)
    .use(router)
    .use(ArcoVue)
    .use(ArcoVueIcon)
    .provide('api', api)
    .mount('#app')

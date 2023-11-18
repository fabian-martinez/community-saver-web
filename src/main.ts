import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import store from './store';
import * as Filters from './filters';

const app = createApp(App);

app.config.globalProperties.$filters = Filters;
app.use(store).use(router).mount('#app')


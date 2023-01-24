import { createApp } from 'vue'
import store from "./store/index.js";
import App from './App.vue'
import './assets/js/jquery-1.8.3.min'
import './assets/js/heandes.js'
import router from "./router/router.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

var app = createApp(App).use(router).use(ElementPlus).use(store);
app.mount('#app');


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

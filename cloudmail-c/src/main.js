import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue'
import router from './router'
//引入elemntsplus组件库
import ElementPlus from 'element-plus'
//引入elemntsplus的ICON组件
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import piniaPersist from 'pinia-plugin-persist';  //引入pinia持久化模块







const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);
app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount('#app');


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


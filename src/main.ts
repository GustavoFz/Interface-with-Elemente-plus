import FontAwesomeIcon from '@/utils/fontawesome-icons'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.css'

const pinia = createPinia()
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')

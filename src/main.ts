import { createApp } from 'vue'
import App from './App.vue'
import YwtIcon from '../plugins/index';
const app = createApp(App)
app.use(YwtIcon)
app.mount('#app')


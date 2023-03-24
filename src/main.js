import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles.css'
import 'vuetify/dist/vuetify.css'
import { createVuetify } from 'vuetify'

const app = createApp(App)
const vuetify = createVuetify()

app.use(router)
app.use(store)
app.use(vuetify)

app.mount('#app')

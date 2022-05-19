import { createApp } from 'vue'

import App from './App.vue'

//import store
import store from './store'

//use store and mount app
createApp(App).use(store).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/index'
import store from './Store/index'
const { Input } = require('@progress/kendo-vue-inputs');
import Snackbar from 'vuejs-snackbar';

// Import Bootstrap an BootstrapVue CSS files (order is important)

import { LayoutInstaller, TabStrip } from "@progress/kendo-layout-vue-wrapper";
const app= createApp(App)
app.use(LayoutInstaller);
app.use(TabStrip);
app.use(router)
app.use(Input)
app.use(store)
app.use(Snackbar)

  
app.mount('#app')

import { createApp } from 'vue'

import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

const app = createApp(App)

// global registration of component, UI components will most likely be used all over the app so makes sense to register them globally instead of locally
// global components must be used with <component></component> syntax, can't be used interchangeably with <Component /> like it's possible with local components
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)

app.mount('#app')

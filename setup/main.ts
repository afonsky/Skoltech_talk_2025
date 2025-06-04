import { defineAppSetup } from '@slidev/types'
// import { createApp, ref } from 'vue'

/* plotly */
// import { VuePlotly } from 'vue3-plotly'

import vue3dLoader from "vue-3d-loader"

// const app = createApp(App)

// app.use(vue3dLoader).mount('#app')
// createApp(App).use(vue3dLoader).mount("#app")


// import { reactive, toRefs } from 'vue'

// import { Range } from 'vue-range-multi'
// import 'vue-range-multi/style.css'

export default defineAppSetup(({ app, router }) => {
  app.component('v-vue3dLoader', vue3dLoader  )
})
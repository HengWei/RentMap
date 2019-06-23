import Vue from 'vue'
import Detail from './Detail.vue'
import App from './Search.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDqeRwFx_ZNQRTxjYsuEaqGe2gnZMj5_W8',    
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  el: '#detail',
  render: h => h(Detail)
})


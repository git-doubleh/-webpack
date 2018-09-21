import Vue from 'vue'
import App from './app.vue'
import router from './router/router.js'
import iView from 'iview';
Vue.use(iView)

new Vue({
    router,
    render:h=>h(App)
}).$mount('#app')

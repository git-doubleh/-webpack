import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '../components/index.vue'
import first from '../components/first.vue'
const router = new Router({
    routes:[
        {
            path:'/first',
            name:'first',
            component:first
        },
        {
            path:'/index',
            name:'index',
            component:index
        },
        {
            path:'/',
            redirect:'/index'
        }
    ]
})

export default router
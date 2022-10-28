import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/view/login/index.vue'
import Profile from "@/view/login/profile.vue";


const routes = [{
    path: '/',
    redirect: '/login/334/profile'
},
    {
        path: '/login/:id',
        name: 'Login',
        component: Index,
        props: { newsletterPopup: false },
        children:[{
            path: 'profile',
            component: Profile,
        }]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

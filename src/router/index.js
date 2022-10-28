import {createRouter, createWebHashHistory} from 'vue-router'
import Index from '@/view/login/index.vue'
import Profile from "@/view/login/profile.vue";
import test1 from "@/test/01.vue";

const routes = [{
    path: '/',
    redirect: '/test/02'
},
    {
        path: '/login/:id',
        name: 'Login',
        component: Index,
        props: {newsletterPopup: false},
        children: [{
            path: 'profile',
            component: Profile,
        }]
    },
    {
        path: '/test/01',
        name: 'test01',
        component: () => import("@/test/01.vue"),
    },  {
        path: '/test/02',
        name: 'test02',
        component: () => import("@/test/02.vue"),
    },  {
        path: '/test/03',
        name: 'test03',
        component: () => import("@/test/03.vue"),
    },  {
        path: '/test/04',
        name: 'test04',
        component: () => import("@/test/04.vue"),
    },  {
        path: '/test/05',
        name: 'test05',
        component: () => import("@/test/05.vue"),
    },  {
        path: '/test/06',
        name: 'test06',
        component: () => import("@/test/06.vue"),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

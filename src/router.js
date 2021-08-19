import vueRouter from 'vue-router'
import Vue from 'vue'
import main from '@/components/homepage/main'
import about from '@/components/about'
import contact from '@/components/contact'


Vue.use(vueRouter);

export const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: main
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/contact',
            component: contact
        }
    ]
});
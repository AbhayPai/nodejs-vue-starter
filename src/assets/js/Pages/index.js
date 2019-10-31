/*
 *  Require Sass file for the compilation
 */
require('SassPath/pages/index.scss');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from 'ComponentsPath/Login/Login';
import Routers from 'ComponentsPath/Routers/Index';
import HomeIndex from 'ComponentsPath/Contents/Home/HomeIndex';
import MenuIndex from 'ComponentsPath/Contents/Menu/MenuIndex';
import BlogIndex from 'ComponentsPath/Contents/Blog/BlogIndex';
import PageNotFound from 'ComponentsPath/NotFound/PageNotFound';
import OurStoryIndex from 'ComponentsPath/Contents/OurStory/OurStoryIndex';
import ContactReservationIndex from 'ComponentsPath/Contents/ContactReservation/ContactReservationIndex';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            target: '',
            name: 'Home',
            display: true,
            component: HomeIndex,
            path: '/',
        },
        {
            target: '',
            name: 'Our Story',
            display: true,
            component: OurStoryIndex,
            path: '/ourstory',
        },
        {
            target: '',
            name: 'Menu',
            display: true,
            component: MenuIndex,
            path: '/menu',
        },
        {
            target: '',
            name: 'Blog',
            display: true,
            component: BlogIndex,
            path: '/blog',
        },
        {
            target: '',
            name: 'Contact & Reservation',
            display: true,
            component: ContactReservationIndex,
            path: '/contact',
        },
        {
            target: '',
            name: 'Login',
            display: false,
            component: Login,
            path: '/login',
        },
        {
            path: '*',
            target: '',
            display: false,
            name: 'Page Not Found',
            component: PageNotFound,
        },
    ]
});

new Vue({
    router,
    render: h => h(Routers),
    linkActiveClass: 'active'
}).$mount('#app');

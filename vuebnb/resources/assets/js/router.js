import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ListingPage from '../components/ListingPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/listing/:listing', component: ListingPage, name: 'listing' }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
});

/*

//note the dynamic segment :listing

There are two modes for Vue Router:
hash - uses the URL hash to simulate a full URL so that the page wont be reloaded when the hash changes
history has real URLs and leverages history.pushState API to change the URL without causing a page reload
The only downside to history mode is that URLs outside of the app, such as /some/weird/path, can't be handled by Vue and must be handled by the server


 */
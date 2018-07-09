// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate.vue'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyCJ3nkx_Z55jG7KFX1BVVydcre0h74wIFs',
  authDomain: 'vue-school-forum-bd68b.firebaseapp.com',
  databaseURL: 'https://vue-school-forum-bd68b.firebaseio.com',
  projectId: 'vue-school-forum-bd68b',
  storageBucket: '',
  messagingSenderId: '814973602056'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxx",
  databaseURL: "xxxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxx.xxxxxxxx.xxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxxxxx",
  appId: "1:xxxxxxxxxxxx:xx:x",
  measurementId: "xxx-xxxxxxxxxx",

  clientId: "xxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx.xx.xxxxxxxxxxx.xxx"
};

firebase.initializeApp(firebaseConfig);

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import firebase from 'firebase';
import App from './App';
import store from '../store';
import router from './router';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});

const config = {
  apiKey: 'AIzaSyD8RTIS1VMI76VwdvHhba9wXFyIkbg4PiE',
  authDomain: 'project-webextension-tg-4dfca.firebaseapp.com',
  databaseURL: 'https://project-webextension-tg-4dfca.firebaseio.com',
  projectId: 'project-webextension-tg-4dfca',
};
firebase.initializeApp(config);

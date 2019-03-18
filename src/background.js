import firebase from 'firebase';
import store from './store';

// eslint-disable-next-line no-unused-vars
browser.browserAction.onClicked.addListener((tab) => {
  console.log(`Hello ${store.getters.foo}!`);
});

const config = {
  apiKey: 'AIzaSyD8RTIS1VMI76VwdvHhba9wXFyIkbg4PiE',
  databaseURL: 'https://project-webextension-tg-4dfca.firebaseio.com',
  projectId: 'project-webextension-tg-4dfca',
};
firebase.initializeApp(config);

import store from './store';

// eslint-disable-next-line no-unused-vars
browser.browserAction.onClicked.addListener((tab) => {
  console.log(`Hello ${store.getters.foo}!`);
});

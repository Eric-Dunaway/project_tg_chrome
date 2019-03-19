<template>
  <v-app>
    <v-content>
      <!-- eslint-disable-next-line -->
      <Background :searchWord="word" :customURL="userURL">
        <MiddleComponent type="primary">
          Erase & replace with middle component
        </MiddleComponent>
      </Background>
    </v-content>
  </v-app>
</template>

<script>
import Background from '../../components/Background';
import MiddleComponent from '../../components/MiddleComponent';
// ********/SEARCH PHOTOS CONTAINING WORD(S)\**********
const word2Search = 'ocean';
// ******************************************************

// ********/CUSTOM URL FOR USERS\**********
// commented out at the moment but works, uncomment 4 dolphin!
// const url2Show = 'https://images.unsplash.com/photo-1539131258078-89aaa90dd845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
// ******************************************************

export default {
  components: {
    Background,
    MiddleComponent,
  },
  data() {
    return {
      word: word2Search,
      // userURL: null || url2Show,
      middleComponent: '',
    };
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage('extName');
    },
  },
  mounted() {
    browser.runtime.sendMessage({});
  },
  render(createElement) {
    return createElement('h1', 'Hello world!');
  },
};
</script>

<style scoped>
  p {
    font-size: 20px;
  }
</style>

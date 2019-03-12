<template>
  <!-- eslint-disable-next-line -->
      <Background :searchWord="word" :customURL="userURL">
    <v-container fluid>
      <v-layout
        align-center
        justify-center
        column
      >
        <v-flex>
          <Time />
        </v-flex>
      </v-layout>
    </v-container>
  </Background>
</template>

<script>
import Time from '../../components/Time';
import Background from '../../components/Background';
// ********/SEARCH PHOTOS CONTAINING WORD(S)\**********
const word2Search = 'starscape';
// ******************************************************

// ********/CUSTOM URL FOR USERS\**********
// commented out at the moment but works
// uncomment line 28 and 39 userURL: null || url2Show to see dolphin!
// const url2Show = 'https://images.unsplash.com/photo-1539131258078-89aaa90dd845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
// ******************************************************

export default {
  components: {
    Time,
    Background,
  },

  data() {
    return {
      word: word2Search,
      // userURL: null || url2Show,
      color: '',
      fontFamily: '',
      fontSize: null,
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
  methods: {
    // This method will hook up to the color picker component
    // updateColor(newColor) {
    //   this.color = newColor;
    // },
  },
};
</script>

<style scoped>
  p {
    font-size: 20px;
  }
</style>

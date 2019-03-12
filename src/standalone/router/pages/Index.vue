<template v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Techtonic</span>
        <span class="font-weight-light"> Project Chrome</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Background />
    </v-content>
  </v-app>
</template>

<script>
import Background from '../../components/Background';

export default {
  components: {
    Background,
  },
  data() {
    return {};
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage('extName');
    },
  },
  mounted() {
    browser.runtime.sendMessage({});
  },
};
</script>

<style scoped>
  p {
    font-size: 20px;
  }
</style>

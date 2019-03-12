<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>Techtonic</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        flat
        href="https://www.techtonic.com"
        target="_blank"
      >
        <v-img
          :src="require('../../../assets/Techtonic_Black.png')"
          class="my-3"
          contain
        />
      </v-btn>
    </v-toolbar>

    <v-content>
      <Layout />
    </v-content>
  </v-app>
</template>

<script>
import Layout from '../../components/Layout';

export default {
  components: {
    Layout,
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

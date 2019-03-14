<template>
  <v-app>
    <v-content>
      <router-view>
        <Main />
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import Main from '../../components/Main';


export default {
  components: {
    Main,
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
  font-size: 40px;
}
</style>

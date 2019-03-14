<template>
  <v-container>
    <h1>Main container content here</h1>
    <!-- Components go here (Clock, calendar, Profile/settings) -->
  </v-container>
</template>

<script>
// import components here

export default {
  components: {
    // register components for the Main Page here
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

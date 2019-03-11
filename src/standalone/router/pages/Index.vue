<template>
  <p>{{ defaultText }}</p>
</template>

<script>

export default {
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

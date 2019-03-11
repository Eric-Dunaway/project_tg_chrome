<template>
  <h1>{{ defaultText }}</h1>
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

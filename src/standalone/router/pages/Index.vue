<template>
  <v-container
    align-content-center
    justify-center
  >
    <h1>Main container content here</h1>
    <!-- Components go here (Clock, calendar, Profile/settings) -->
    <v-layout
      align-center
      justify-center
      row
      fill-height
      class="calendar-container"
    >
      <p class="clock pa-2">
        This is a Clock
      </p>
    </v-layout>

    <Calendar />
  </v-container>
</template>

<script>
// import components here
import Calendar from '../../components/Calendar';

export default {
  components: {
    // register components for the Main Page here
    Calendar,
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
.clock {
  font-size: 80px;
  height: 40%;
  margin-top: 20%;
  border: 1px solid black;
}
.calendar-container {
  border: 1px solid green;
}
</style>

<template>
  <v-container>
    <v-layout
      justify-center
      column
    >
      <div class="main">
        <div
          class="clock"
          :style="timeStyle"
        >
          {{ currentTime }}
        </div>
        <div
          class="date"
          :style="dateStyle"
        >
          {{ currentDate }}
        </div>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import dayjs from 'dayjs';

export default {
  props: {
    timeStyle: {
      type: Object,
      default() {
        return {
          color: 'black',
          fontSize: `${150}px`,
        };
      },
    },
    dateStyle: {
      type: Object,
      default() {
        return {
          color: 'black',
          fontSize: `${40}px`,
        };
      },
    },
    timeFormat: {
      type: String,
      default() {
        return 'h:mm A';
      },
    },
  },
  data: () => ({
    currentTime: null,
    currentDate: null,
    begin: null,
  }),
  created() {
    this.currentTime = dayjs().format(this.timeFormat);
    this.currentDate = dayjs().format('dddd, MMMM YY');
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  },
  beforeDestroy() {
    this.begin = this.setInterval();
    clearInterval(this.begin);
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = dayjs().format(this.timeFormat);
    },
    updateCurrentDate() {
      this.currentDate = dayjs().format('dddd, MMMM YY');
    },
  },
};

</script>

<style scoped>
.container {
  background: transparent;
}
.main {
  background: transparent;
}
.clock {
  text-align: center;
}

.date {
  text-align: center;
  margin-top: -0.7em;
  text-transform: uppercase;
}

.check {
  font-size: 4em;
}

.selector {
  text-align: center;
}
</style>

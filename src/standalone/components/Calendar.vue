<template>
  <v-layout
    align-center
    justify-center
    row
    fill-height
    class="calendar"
  >
    <v-flex
      xs12
      sm6
      class="center"
    >
      <v-icon
        :color="determineIconColor()"
        x-large
      >
        today
      </v-icon>
      <v-data-table
        id="transparent"
        :items="events"
        class="calendar"
        :dark="darktheme"
        hide-headers
      >
        <template v-slot:no-data>
          <v-alert
            :value="true"
            color="transparent"
            class="center"
          >
            You have nothing scheduled today.
          </v-alert>
        </template>
        <template v-slot:items="events">
          <td>
            {{ events.item.time }}
          </td>
          <td>
            {{ events.item.title }}
          </td>
          <td>
            {{ events.item.timeleft }}
          </td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    darktheme: {
      type: Boolean,
      required: true,
    },

  },
  data: () => ({
    events: [],
  }),
  computed: {
    dark() {
      return !this.darktheme;
    },
  },
  // this is where api call to firebase goes to fill out events
  // for now, it returns a hard-coded list
  created() {
    this.events = [{
      time: '1:00',
      title: 'Sprint Planning',
      timeleft: '15 min',
    },
    {
      time: '4:00',
      title: '1:1 w/ Team',
      timeleft: '3 hours',
    },
    {
      time: '1:00',
      title: 'Sprint Planning',
      timeleft: '15 min',
    },
    {
      time: '4:00',
      title: '1:1 w/ Team',
      timeleft: '3 hours',
    },
    {
      time: '1:00',
      title: 'Sprint Planning',
      timeleft: '15 min',
    },
    {
      time: '4:00',
      title: '1:1 w/ Team',
      timeleft: '3 hours',
    },
    {
      time: '1:00',
      title: 'Sprint Planning',
      timeleft: '15 min',
    },
    {
      time: '4:00',
      title: '1:1 w/ Team',
      timeleft: '3 hours',
    },
    {
      time: '1:00',
      title: 'Sprint Planning',
      timeleft: '15 min',
    },
    {
      time: '4:00',
      title: '1:1 w/ Team',
      timeleft: '3 hours',
    }];
  },
  methods: {
    determineIconColor() {
      return this.darktheme ? 'white' : 'black';
    },
    calculateTimeLeft(time) {
      return time;
    },
  },
};
</script>

<style>
.center{
  text-align: center;
  align-self: center;
}
.calendar {
  border: 1px solid red;

}
.title {
  border: 1px solid blue;
  max-width: 50%;
}
.noevents {
  color: black;
}
#transparent > .v-datatable,
#transparent > .v-table__overflow > .v-table,
#transparent > .v-table__overflow > .v-datatable,
#transparent > .v-datatable > .v-datatable__actions {
  background-color: transparent !important;
}

</style>

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
            {{ displayTime(events.item.time) }}
          </td>
          <td>
            {{ events.item.title }}
          </td>
          <td>
            {{ calculateTimeLeft(events.item.time) }}
          </td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
import moment from 'moment';

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
      time: '2019-03-22 9:00:00',
      title: 'Scrum',
    },
    {
      time: '2019-03-22 10:00:00',
      title: '1:1 w/ Team Lead',
    },
    {
      time: '2019-03-22 10:30:00',
      title: 'Sprint Planning',
    },
    {
      time: '2019-03-22 11:00:00',
      title: 'Backlog',
    },
    {
      time: '2019-03-22 12:00:00',
      title: 'Lunch',
    },
    {
      time: '2019-03-22 14:00:00',
      title: 'Client meeting',
    },
    {
      time: '2019-03-22 15:00:00',
      title: 'Coffee Break',
    },
    {
      time: '2019-03-22 17:45:00',
      title: 'Team Exercises',
    },
    {
      time: '2019-03-22 18:00:00',
      title: 'Yoga',
    },
    {
      time: '2019-03-22 21:00:00',
      title: 'StarTrek',
    },
    ];
  },
  methods: {
    determineIconColor() {
      return this.darktheme ? 'white' : 'black';
    },
    displayTime(time) {
      return moment(time).format('hh:mm');
    },
    calculateTimeLeft(time) {
      return moment(time).fromNow();
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
  /* border: 1px solid red; */

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

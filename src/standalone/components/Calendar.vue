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
      justify-content-center
    >
      <v-data-table
        id="transparent"
        :items="events"
        class="calendar"
      >
        <template v-slot:no-data>
          <v-alert
            :value="true"
            color="transparent"
            icon="today"
            class="black--text"
          >
            You have nothing scheduled today.
          </v-alert>
        </template>
        <template v-slot:items="props">
          <td>
            {{ props.item.time }}
          </td>
          <td>
            {{ props.item.title }}
          </td>
          <td>
            {{ props.item.timeleft }}
          </td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    textcolor: 'black',
    events: [
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
    ],


  }),
};
</script>

<style>
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

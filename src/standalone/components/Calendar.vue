<template>
  <v-layout class="calendar">
    <v-flex>
      <h1 class="title">
        Here's Johnny
      </h1>
      <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">
            {{ props.item.calories }}
          </td>
          <td class="text-xs-right">
            {{ props.item.fat }}
          </td>
          <td class="text-xs-right">
            {{ props.item.carbs }}
          </td>
          <td class="text-xs-right">
            {{ props.item.protein }}
          </td>
          <td class="text-xs-right">
            {{ props.item.iron }}
          </td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    events: [
      { time: '1:30', title: 'Backlog' },
    ],

    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' },
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
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

</style>

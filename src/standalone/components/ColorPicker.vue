<template>
  <v-container>
    <v-layout
      justify-center
      column
    >
      <div>
        <div class="selected-color-info">
          <ColorPicker
            v-model="color"
            :width="300"
            :height="300"
            :disabled="false"
            start-color="#000000"
            :style="{color:color}"
            @colorChange="updateColor"
          />
        </div>
        <div class="selected-color-info">
          <p>Selected color:</p>
          <svg
            height="32"
            width="32"
          >
            <circle
              cx="16"
              cy="16"
              r="15"
              :fill="color"
            />
          </svg>
        </div>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import ColorPicker from 'vue-color-picker-wheel';
// This will import from the time component
// import Time from './Time';

export default {
  components: {
    ColorPicker,
  },
  data: () => ({
    color: '',
  }),
  methods: {
    updateColor(color) {
      console.log('the new color is', color);
      this.color = color;
      this.$emit('changeColor', color);
    },
  },
};

</script>

<style scoped>

.selected-color-info {
  display: flex;
  margin: 15px 0;
}

</style>

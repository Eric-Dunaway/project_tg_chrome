<template>
  <v-container
    fluid
  >
    <v-layout
      row
      wrap
    >
      <v-flex grow>
        <v-card>
          <v-img
            :src="image"
            tile
            aspect-ratio="1.7"
            height="100%"
            fill-height
          >
            <!-- component -->
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script type="application/javascript">
import axios from 'axios';

export default {
  data: () => ({
    image: '',
  }),
  created() {
    const picture = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          headers: {
            Authorization: 'Client-ID c01fec69a3d7aba9294659ebf752717ae5bbbe7283df275c2195af91d67de6f1',
          },
          params: {
            query: 'jellyfish',
            orientation: 'landscape',
            w: window.screen.width,
            h: window.screen.height,
          },
        });
        console.log(response);
        console.log();
        this.image = response.data.urls.full;
      } catch (error) {
        console.log('Line 34 AXIOS ERROR', error);
        this.image = '../../assets/hero.jpeg';
      }
    };
    picture();
    console.log('WIDTH!', window.screen.width);
    console.log('HEIGHT!', window.screen.height);
  },
};

</script>

<style>
  #picture {
    background-size: cover;
    /* min-height 101% to prevent ugly white space on scroll */
    min-height: 101%;
  }
</style>

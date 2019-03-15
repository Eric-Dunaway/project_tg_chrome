<template>
  <v-card>
    <v-img
      :src="image"
      tile
      aspect-ratio="1.7"
      height="100%"
    >
      <!-- component -->
    </v-img>
  </v-card>
</template>
<script type="application/javascript">
import axios from 'axios';

export default {
  data: () => ({
    image: '',
  }),
  created() {
    axios.get('https://api.unsplash.com/search/photos?query=jellyfish', {
      headers: {
        Authorization: 'Client-ID c01fec69a3d7aba9294659ebf752717ae5bbbe7283df275c2195af91d67de6f1',
      },
    })
      .then((response) => {
      // JSON responses are automatically parsed.
        this.image = response.data.results[1].urls.full;
        console.log(response.data.results[0].urls.full);
      })
      .catch((e) => {
        this.errors.push(e);
      });
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

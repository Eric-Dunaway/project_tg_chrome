<template>
  <v-card>
    <v-img
      :src="image"
      tile
      aspect-ratio="1.7"
    >
      <!-- component -->
    </v-img>
  </v-card>
</template>
<script type="application/javascript">
//
// import Unsplash from 'unsplash-js';

// const unsplash = new Unsplash({
//   applicationId: '{c01fec69a3d7aba9294659ebf752717ae5bbbe7283df275c2195af91d67de6f1}',
//   secret: '{6971f63c5bf6731860063a4cf1eabb65fcef1d7ab9b6bbc632f7cd4aeaed1e2d}'
// });
const image = 'https://images.unsplash.com/flagged/photo-1552345301-833de8c1e8c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';
export default {
  data: () => ({
    image,
  }),
};
</script>

<style>
  #picture {
    background-size: cover;
    /* min-height 101% to prevent ugly white space on scroll */
    min-height: 101%;
  }
</style>

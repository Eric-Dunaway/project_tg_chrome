<template>
  <div id="picture" />
</template>
<script type="application/javascript">
// import Unsplash from 'unsplash-js';

// const unsplash = new Unsplash({
//   applicationId: '{c01fec69a3d7aba9294659ebf752717ae5bbbe7283df275c2195af91d67de6f1}',
//   secret: '{6971f63c5bf6731860063a4cf1eabb65fcef1d7ab9b6bbc632f7cd4aeaed1e2d}'
// });
export default {
  data: () => ({
  }),
};
</script>

<style>
  #picture {
    background-image: url("../../assets/hero.jpeg");
    background-size: cover;
    /* min-height 101% to prevent ugly white space on scroll */
    min-height: 101%;
  }
</style>

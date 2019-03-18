<template>
  <div
    id="backgroundPicDiv"
    :style="{
      backgroundImage: `url('${image} ')`,
      width: `${width}`,
      height: `${height}`
    }"
  >
    <slot />
  </div>
</template>
<script type="application/javascript">
import axios from 'axios';

export default {
  data: () => ({
    image: '',
    width: window.screen.width,
    height: window.screen.height,
  }),
  created() {
    const picture = async () => {
      // this.image = '../../assets/hero.jpeg';
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          headers: {
            Authorization: 'Client-ID c01fec69a3d7aba9294659ebf752717ae5bbbe7283df275c2195af91d67de6f1',
          },
          params: {
            query: 'stars',
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
  },
};

</script>

<style>
  #backgroundPicDiv {
    background-size: cover;
    min-height: 101vh;
    overflow: hidden;
  }
</style>

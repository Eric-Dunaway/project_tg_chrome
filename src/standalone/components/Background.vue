<template>
  <div
    id="backgroundPicDiv"
    :style="{
      backgroundImage: `url('${image}&w=${width}&h=${height - 62}&fit=max')`,
      width: `${width}`,
      height: `${height - 62}`
    }"
  >
    <slot />
  </div>
</template>
<script type="application/javascript">
import axios from 'axios';

export default {
  props: {
    searchWord: {
      type: String,
      default: 'waves',
    },
    customURL: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    image: '',
    width: window.screen.width,
    height: window.screen.height,
  }),
  created() {
    const picture = async () => {
      if (this.customURL === null) {
        try {
          const response = await axios.get('https://api.unsplash.com/photos/random', {
            headers: {
              Authorization: 'Client-ID c01fec69a3d7aba9294659ebf752717ae5bbbe7283df275c2195af91d67de6f1',
            },
            params: {
              query: this.searchWord,
              orientation: 'landscape',
            },
          });
          // Print payload from unsplash.com api in following log
          // console.log(response);
          this.image = response.data.urls.full;
        } catch (error) {
          console.log('Line 34 AXIOS ERROR', error);
          // Default Image
          this.image = 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80';
        }
      } else {
        this.image = this.customURL;
      }
    };
    picture();
  },
};

</script>

<style>
  #backgroundPicDiv {
    background-size: cover;
    min-height: 101%;
    overflow: hidden;
  }
</style>

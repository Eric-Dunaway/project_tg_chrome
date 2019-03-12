<template>
  <button
    id="middleComp"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: 'Button',
};
</script>
<style>
  #middleComp {
    height: 100px;
    width: 250px;
    background-color: white;
    border-radius: 30px;
    font-size: 35px;
    opacity: .68;
  }
</style>

<template>
  <button
    id="middleComp"
    :class="type"
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
    height: 150px;
    width: 35%;
    background-color: white;
    border-radius: 30px;
    font-size: 35px;
    opacity: .68;
  }
</style>

<template>
  <TheHeader :title="'Remember Me'" />
  <TheResources />
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheResources from './components/learning-resources/TheResources.vue'

export default {
  components: {
    TheResources,
    TheHeader,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chilanka&display=swap');
* {
  box-sizing: border-box;
}
html {
  font-family: 'Chilanka', cursive;
}
body {
  margin: 0;
}
</style>
<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import Home from '@/views/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
body {
  font-family: "TSTARPRO","Arial",sans-serif;
}
</style>

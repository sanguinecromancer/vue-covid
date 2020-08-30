<template>
  <div id="app">
    <Covids />
  </div>
</template><script>
import Covids from './components/Covids.vue';

export default {
  name: 'app',
  components: {
    Covids
  }
}
</script><style>
  @import './assets/styles/style.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

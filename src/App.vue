<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="What am I doing?"/>
  <Cou msg="What am I doing?" mas="Get me out of here"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Cou from './components/Courses.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Cou
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

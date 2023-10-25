<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="message"/>
    <h1 v-for="course in courses" :key="course"
    >{{course}}</h1>
    <Cou @new-course="receiveCourse" />
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Cou from './components/CoursesWorld.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            Cou
        },
        data() {
            return {
                courses: [],
            }
        },
        methods: {
            receiveCourse(course) {
                console.log(course)
                this.courses.push(course)
            }
        },
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

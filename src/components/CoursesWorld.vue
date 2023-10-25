<script>
import { ref } from 'vue'

export default {
    setup() {
        const message = ref('')

        return {
            message
        }
    },
    methods: {
        onSubmit() {
            console.log(this.message)
            this.$emit('new-course', this.message)
            this.message = ''
        }
    }
}
</script>

<template>
  <div class="hello">
    <h1>  eyooooooo {{ message }}</h1>
    <form @submit.prevent="onSubmit">
        <input v-model="message" placeholder="course" />
        <input type="submit" value="Submit" />
    </form>
 </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

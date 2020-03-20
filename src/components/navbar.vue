<template>
    <div>
        <button @click="aktuelles">
            Aktuelles
            </button>
            <button @click="aktuelles">
            Aktuelles
            </button>
            <button @click="aktuelles">
            Aktuelles
            </button>
            <button @click="aktuelles">
            Aktuelles
            </button>
            <button @click="aktuelles">
            Aktuelles
            </button>
    </div>
</template>

<script>
//import VueRouter from 'vue-router';
export default {
  name: 'Navbar',

  methods: {
    aktuelles: function () {
      this.$router.push('HelloWorld')
    }
  }
}
</script>

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
<template>
  <div id="app">
    <div v-if="isLoggedOut" class="container-fluid">
      <p>Einen Moment bitte…</p>
    </div>
    <div v-if="isLoggedIn">
      <Slide :closeOnNavigation="true">
        <div class="nav"> 
          <router-link to='/'>Aktuelles</router-link>
          <router-link to='/berater'>Berater</router-link>
          <router-link to='/chat'> Chat</router-link>
          <router-link to='/karte'>Karte</router-link>
          <router-link to='/impressum'>Impressum</router-link>
        </div>
      </Slide>
    </div>
    <div v-if="isLoggedIn" class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>

import { Slide } from 'vue-burger-menu'

export default {
  name: 'App',
  computed: {
    isLoggedIn: function() {
      return this.$store.state.currentUser ? true : false
    },
    isLoggedOut: function() {
      return this.$store.state.currentUser ? false : true
    }
  },
  components: {
    Slide
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
  display: flex;
  justify-content: flex-start;
   align-items: flex-start;
  flex-direction: column;
  margin-top: 80px;
}
.nav{
    display:flex;
    flex-direction:column;
    color: #42b983;
}
</style>

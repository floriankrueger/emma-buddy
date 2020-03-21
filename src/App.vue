<template>
  <div id="app">
    <Slide :closeOnNavigation="true">
      <div class="nav"> 
        <router-link to='/' @click="closeSidebarPanel">Aktuelles</router-link>
            <router-link to='/berater' @click="closeSidebarPanel">Berater</router-link>
            <router-link to='/chat' @click="closeSidebarPanel"> Chat</router-link>
            <router-link to='/karte' @click="closeSidebarPanel">Karte</router-link>
            <router-link to='/impressum' @click="closeSidebarPanel">Impressum</router-link>
    </div>
    </Slide>
    <div>
      <router-view />
    </div>
     
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: 'App',
  components: {
    Slide
  },
  
methods: {
            closeSidebarPanel() {
                this.isPanelOpen = false;
            },
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
  display: flex;
  justify-content: flex-start;
   align-items: flex-start;
}
.nav{
    display:flex;
    flex-direction:column;
    color: #42b983;
}
</style>

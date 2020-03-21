<template>
<div>
    <div class="nav"> 
        <router-link to='/' @click="closeSidebarPanel">Aktuelles</router-link>
            <router-link to='/berater' @click="closeSidebarPanel">Berater</router-link>
            <router-link to='/chat' @click="closeSidebarPanel"> Chat</router-link>
            <router-link to='/karte' @click="closeSidebarPanel">Karte</router-link>
            <router-link to='/impressum' @click="closeSidebarPanel">Impressum</router-link>
    </div>
    <div>
        
    </div>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  

   methods: {
            closeSidebarPanel() {
                this.isPanelOpen = false;
            },
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
.nav{
    display:flex;
    flex-direction:column;
    color: #42b983;
}
</style>
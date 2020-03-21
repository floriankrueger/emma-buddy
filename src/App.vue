<template>
  <div id="app">
    <div class="banner">
      <div></div>
      <img src="@/assets/Logo_Emma.png" height="100" width= "100" class="logo">
    </div>
    <div v-if="isLoggedOut" class="container-fluid">
      <p>Einen Moment bitte…</p>
    </div>
    <div v-if="isLoggedIn">
      <Slide :closeOnNavigation="true">
        <div class= "wholeslide">
          <div class="slidetop"> 
            <img src="@/assets/Logo_Emma.png" class="navlogo">
          </div>
        <div class="nav">
          <div class= "navtop"> 
          <router-link to='/' class="navlink">Aktuelles</router-link>
          <router-link to='/berater' class="navlink">Berater</router-link>
          <router-link to='/chat' class="navlink"> Chat</router-link>
          <router-link to='/karte' class="navlink">Karte</router-link>
          <button v-if="isLoggedInAsBuddy" class="navlink" v-on:click="logout">Abmelden</button>
          </div><div class="navimpressum">
          <router-link to='/impressum' class="navlink">Impressum</router-link>
          </div>
        </div>
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
const fb = require("./firebaseConfig.js")

export default {
  name: 'App',
  computed: {
    isLoggedInAsBuddy: function() {
      const user = this.$store.state.currentUser
      return user && !user.isAnonymous
    },
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
  methods: {
    logout: () => {
      fb.signOut()
    }
  }
}
</script>

<style>
.bm-menu{
  background-color: #f5812a;
}
.bm-item-list{
  padding:0px;
  margin-left: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 0px;
  display: flex;
  justify-content: flex-start;
   align-items: flex-start;
  flex-direction: column;
}
.wholeslide{
  display: flex;
  flex-direction: column;
  width:100%;
  padding:0px;
}
.slidetop{
  width: 100%;
  height: 20vh;
}
.nav{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-color: #29b0d0;
    width: 300px;
    height: 73.6vh;
}
.navtop{
    height: 43.6vh;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
}
.navimpressum{
    height: 15vh;
}
.navlink {color: #ffffff;}
.banner{
  align-self: center;
  width: 98%;
  height: 20vh;
}
.navlogo{
  height: 20vh;
  width: 20vh;
}
</style>

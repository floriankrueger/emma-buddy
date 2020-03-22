<template>
  <div id="app" class="wrapper">
    <b-container fluid v-if="isLoggedOut">Einen Moment bitte…</b-container>

    <!-- Sidebar -->
    <b-nav id="sidebar" vertical v-if="isLoggedIn" v-bind:class="{ active: sidebarIsActive }">
      <ul class="list-unstyled components">
        <li class="sidebar-header">
          <img src="@/assets/Logo.png" class="logo" width="160" />
        </li>
        <b-nav-item
          to="/"
          class="navlink"
          v-on:click="hideSidebar"
          exact
          exact-active-class="isActive"
        ><img src="@/assets/news.svg" width="27" height="27" style="background: #1BBD9B; border-radius: 50%;" />Aktuelles</b-nav-item>
        <b-nav-item
          to="/berater"
          class="navlink"
          v-on:click="hideSidebar"
          exact
          exact-active-class="isActive"
        ><img src="@/assets/support.svg" width="27" height="27" />Berater</b-nav-item>
        <b-nav-item
          to="/chats"
          class="navlink"
          v-on:click="hideSidebar"
          exact
          exact-active-class="isActive"
        ><img src="@/assets/rss.svg" width="27" height="27" />Chats</b-nav-item>
        <b-nav-item
          to="/karte"
          class="navlink"
          v-on:click="hideSidebar"
          exact
          exact-active-class="isActive"
        ><img src="@/assets/compas.svg" width="27" height="27" />Karte</b-nav-item>
        <b-nav-item
          to="/faq"
          class="navlink"
          v-on:click="hideSidebar"
          exact
          exact-active-class="isActive"
        ><img src="@/assets/flag.svg" width="27" height="27" />FAQ</b-nav-item>
      </ul>
      <ul class="list-unstyled components bottomNavigation">
        <b-nav-item
          v-if="isLoggedInAsBuddy"
          class="bottomlink logout"
          v-on:click="logout"
        >Abmelden</b-nav-item>
        <b-nav-item
          to="/impressum"
          class="bottomlink"
          v-on:click="hideSidebar"
          exact
          exact-active-class="isActiveAtBottom"
        >Impressum</b-nav-item>
      </ul>
    </b-nav>

    <!-- Page Content -->
    <div id="content" v-if="isLoggedIn">
      <b-button id="sidebarCollapse" v-on:click="showSidebar" class="btn">
        <i class="fas fa-bars"></i>
      </b-button>
      <router-view />
    </div>

    <!-- Dark Overlay element -->
    <div class="overlay" v-bind:class="{ active: sidebarIsActive }" v-on:click="hideSidebar"></div>
  </div>
</template>

<script>
const fb = require("./firebaseConfig.js");

export default {
  name: "App",
  computed: {
    isLoggedInAsBuddy: function() {
      const user = this.$store.state.currentUser;
      return user && !user.isAnonymous;
    },
    isLoggedIn: function() {
      return this.$store.state.currentUser ? true : false;
    },
    isLoggedOut: function() {
      return this.$store.state.currentUser ? false : true;
    }
  },
  data: () => {
    return {
      sidebarIsActive: false
    };
  },
  methods: {
    hideSidebar() {
      this.sidebarIsActive = false;
    },
    showSidebar() {
      this.sidebarIsActive = true;
    },
    logout() {
      this.hideSidebar();
      fb.signOut();
      fb.signInAnonymously();
    }
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}

.wrapper {
  display: block;
}

#sidebarCollapse {
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  font-size: 1em;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -250px;
  /* top layer */
  z-index: 9999;
  transition: all 0.5s ease-in-out;
  background-color: #566a7d;
  border-right: 3px #586e82 solid;
}

.sidebar-header {
  background-color: white;
  text-align: center;
  height: 200px;
  position: relative;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  object-fit: contain;
}

#content {
  position: relative;
}

#sidebar.active {
  left: 0;
}

.navlink {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  line-height: 3em;
  background: #41556a;
  border-bottom: 2px #566a7d solid;
}

.navlink img {
  margin-right: 10px;
}

.nav-link.isActive {
  background: #34485e;
  color: #1cbd9b;
}

.nav-link.isActive:link {
  color: #1cbd9b;
}

.nav-link.isActive:visited {
  color: #1cbd9b;
}

.nav-link.isActive:hover {
  color: #1cbd9b;
}

.nav-link.isActive:active {
  color: #1cbd9b;
}

.nav-link:link {
  color: #ffffff;
}

.nav-link:visited {
  color: #ffffff;
}

.nav-link:hover {
  color: #1cbd9b;
}

.nav-link:active {
  color: #1cbd9b;
}

.bottomNavigation {
  line-height: 3em;
  position: absolute;
  width: 100%;
  bottom: 0;
  list-style-type: none;
}

.bottomlink {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  letter-spacing: 0.2em;
  background: none;
  text-align: center;
  text-transform: uppercase;
  font-size: 10pt;
}

.bottomlink.logout {
  color: rgb(231, 76, 60);
}

.nav-link.isActiveAtBottom {
  background: none;
  color: #1cbd9b;
}

.nav-link.isActiveAtBottom:link {
  color: #1cbd9b;
}

.nav-link.isisActiveAtBottomActive:visited {
  color: #1cbd9b;
}

.nav-link.isActiveAtBottom:hover {
  color: #1cbd9b;
}

.nav-link.isActiveAtBottom:active {
  color: #1cbd9b;
}

.overlay {
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* full screen */
  width: 100vw;
  height: 100vh;
  /* transparent black */
  background: rgba(0, 0, 0, 0.3);
  /* middle layer, i.e. appears below the sidebar */
  z-index: 998;
  opacity: 0;
  /* animate the transition */
  transition: all 0.5s ease-in-out;
}
/* display .overlay when it has the .active class */
.overlay.active {
  display: block;
  opacity: 1;
}

@media only screen and (min-width: 768px) {
  #sidebar {
    left: 0;
  }

  #content {
    position: fixed;
    top: 0;
    left: 250px;
    bottom: 0;
    right: 0;
  }

  #sidebarCollapse {
    display: none;
  }
}
</style>

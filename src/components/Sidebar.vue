<template>
  <b-nav id="sidebar" vertical v-if="isLoggedIn" v-bind:class="{ active: sidebarIsActive }">
    <div id="dismiss" class="d-md-none">
      <a v-on:click="hideSidebar">
        <i class="fas fa-arrow-left"></i>
      </a>
    </div>

    <div class="sidebar-header">
      <img src="@/assets/Logo_Emma.png" height="100" width="100" class="logo" />
    </div>

    <ul class="list-unstyled components">
      <li>
        <b-nav-item to="/" class="navlink" exact exact-active-class="active">Aktuelles</b-nav-item>
      </li>
      <li>
        <b-nav-item to="/berater" class="navlink" exact exact-active-class="active">Berater</b-nav-item>
      </li>
      <li>
        <b-nav-item to="/chats" class="navlink" exact exact-active-class="active">Chat</b-nav-item>
      </li>
      <li>
        <b-nav-item to="/karte" class="navlink" exact exact-active-class="active">Karte</b-nav-item>
      </li>
      <li>
        <b-nav-item
          to="/hilfe"
          class="navlink"
          exact
          exact-active-class="active"
        >Fragen &amp; Antworten</b-nav-item>
      </li>
      <li v-if="isLoggedInAsBuddy">
        <a class="navlink" v-on:click="logout" exact exact-active-class="active">Abmelden</a>
      </li>
      <li>
        <b-nav-item to="/impressum" class="navlink" exact exact-active-class="active">Impressum</b-nav-item>
      </li>
    </ul>
  </b-nav>
</template>
<script>
export default {
    name: 'Sidebar'
}
</script>
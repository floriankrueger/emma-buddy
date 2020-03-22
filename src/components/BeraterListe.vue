<template>
  <div class="container-fluid" id="berater">
    <img src="@/assets/support.svg" width="75" height="75" />
    <h1>Berater</h1>
    <hr />
    <p class="copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div v-for="buddy in buddies" :key="buddy.bid">
      <div class="buddy-card">
        <router-link :to="`/berater/${buddy.bid}`">
          <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
        </router-link>
        <h5 class="mb-1">{{ buddy.name }}</h5>
        <small>{{ buddy.einrichtung }}, {{ buddy.standort }}</small>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "BeraterListe",
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 75,
        height: 75,
        class: "m1"
      }
    };
  },
  computed: {
    ...mapState(["buddies"])
  }
};
</script>
<style scoped>
#berater {
  text-align: center;
  padding: 60px;
}

#berater h1 {
  margin-top: 10px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 16pt;
  letter-spacing: 0.1em;
  margin-bottom: 5px;
}

#berater hr {
  margin-top: 5px;
  margin-bottom: 15px;
  border-color: #1dbd9b;
  width: 300px;
}

#berater p.copy {
  color: #3D5065;
  font-family: "Lato", sans-serif;
  font-size: 12pt;
  margin-bottom: 30px;
}

.buddy-card {
  text-align: center;
  display: block;
  float: left;
  margin-bottom: 20px;
}

/* Small to Large devices (laptops/desktops, up to 992px) */
@media only screen and (max-width: 768px) {
  .buddy-card {
    width: 33%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .buddy-card {
    width: 20%;
  }
}

.buddy-card img {
  margin-bottom: 10px;
}
</style>
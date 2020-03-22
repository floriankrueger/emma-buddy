<template>
  <div class="container-fluid" id="berater">
    <Kopf
      assetName="support"
      title="Berater"
      copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
    </Kopf>
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
import Kopf from './Kopf.vue'
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
  },
  components: {
      Kopf
  }
};
</script>
<style scoped>
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
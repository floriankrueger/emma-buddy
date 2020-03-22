<template>
  <div class="container-fluid" id="berater">
    <Kopf
      assetName="support"
      title="EMMA:Buddys"
      copy="Klicke einen EMMA:Buddy an, um mehr zu erfahren oder einen Chat zu starten."
    >
    </Kopf>
    <div v-for="buddy in buddies" :key="buddy.bid">
      <div class="buddy-card">
        <router-link :to="`/berater/${buddy.bid}`">
          <BeraterAvatar :buddy="buddy"></BeraterAvatar>
        </router-link>
        <h5 class="mb-1">{{ buddy.name }}</h5>
        <small>{{ buddy.einrichtung }}, {{ buddy.standort }}</small>
      </div>
    </div>
  </div>
</template>
<script>
import Kopf from './Kopf.vue';
import BeraterAvatar from './BeraterAvatar.vue';
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
      Kopf,
      BeraterAvatar
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
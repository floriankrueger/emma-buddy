<template>
  <div class="container-fluid" id="berater">
    <h1>Berater</h1>
    <b-list-group v-for="buddy in buddies" :key="buddy.bid">
      <router-link :to="`/berater/${buddy.bid}`">
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <div class="d-flex w-100 justify-content-between">
          <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
          <h5 class="mb-1">{{ buddy.name }}</h5>
          <small>{{ buddy.einrichtung }}, {{ buddy.standort }}</small>
        </div>
        <small>{{ buddy.status() }}</small>
      </b-list-group-item>
      </router-link>
    </b-list-group>
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

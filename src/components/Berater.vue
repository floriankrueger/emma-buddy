<template>
  <div class="container-fluid" id="berater">
      <h1 v-if="isBuddyLoaded">{{ buddy.name }}</h1>
  </div>
</template>
<script>
export default {
  name: "Berater",
  computed: {
    isBuddyLoaded: function() {
        return this.$store.state.buddies.length !== 0
    },
    buddy: function() {
        return this.$store.state.buddies.find(element => element.bid == this.$route.params.bid)
    }
  }
};
</script>

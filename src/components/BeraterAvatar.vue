<template>
  <img :src="avatarSrc" width="75" height="75" style="border-radius: 50%;" />
</template>
<script>
const fb = require("../firebaseConfig.js");
export default {
  name: "BeraterAvatar",
  props: {
    buddy: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      avatarSrc: null
    };
  },
  mounted() {
    const buddy = this.$store.state.buddies.find(
      element => element.bid == this.buddy.bid
    );
    if (buddy && buddy.avatarRef) {
      const that = this
      this.avatarSrc = fb.storage
        .ref(buddy.avatarRef)
        .getDownloadURL()
        .then(function(url) {
          that.avatarSrc = url;
        });
    } else if (buddy && buddy.geschlecht) {
      if (buddy.geschlecht === 'm') {
        this.avatarSrc = require(`../assets/dude.svg`);
      } else if (buddy.geschlecht === 'w') {
        this.avatarSrc = require(`../assets/girl.svg`);
      } else {
        this.avatarSrc = require(`../assets/support.svg`);
      }
    } else {
      this.avatarSrc = require(`../assets/support.svg`);
    }
  }
};
</script>
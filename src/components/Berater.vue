<template>
  <div class="container-fluid" id="berater">
    <router-link id="beraterBack" to="/berater">
      <i class="fas fa-chevron-left"></i>
      Zurück
    </router-link>
    <BeraterAvatar :buddy="buddy"></BeraterAvatar>
    <h1 v-if="isBuddyLoaded">{{ buddy.name }}</h1>
    <b-btn primary v-on:click="openChat">Chat öffnen</b-btn>
  </div>
</template>
<script>
import BeraterAvatar from "./BeraterAvatar.vue";
import { createChat } from "../firebaseActions";

export default {
  name: "Berater",
  data() {
    return {
      avatarSrc: null
    };
  },
  computed: {
    isBuddyLoaded() {
      return this.$store.state.buddies.length !== 0;
    },
    buddy() {
      return this.$store.state.buddies.find(
        element => element.bid == this.$route.params.bid
      );
    }
  },
  methods: {
    openChat() {
      const existingChat = this.$store.state.chats.find(element => {
        return element.bid === this.$route.params.bid;
      });

      if (existingChat && existingChat.cid) {
        this.$router.push(`/chats/${existingChat.cid}`);
      } else {
        const cid = createChat({
          uid: this.$store.state.currentUser.uid,
          bid: this.$route.params.bid
        });
        this.$router.push(`/chats/${cid}`);
      }
    }
  },
  components: {
    BeraterAvatar
  }
};
</script>
<style scoped>
#berater {
  padding: 60px;
  text-align: center;
}

#beraterBack {
  position: absolute;
  display: block;
  top: 10px;
  left: 10px;
  font-size: 1em;
  text-transform: lowercase;
  letter-spacing: 0.1em;
}

#beraterBack:link {
  color: #41556a;
}

#beraterBack:visited {
  color: #41556a;
}

#beraterBack:hover {
  color: #41556a;
}

#beraterBack:active {
  color: #41556a;
}
</style>
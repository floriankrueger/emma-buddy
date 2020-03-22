<template>
  <b-container fluid>
    <Kopf assetName="rss" title="Chats"></Kopf>
    <div v-for="chat in chats" :key="chat.cid">
        <ChatListElement :chat="chat"></ChatListElement>
    </div>
  </b-container>
</template>
<script>
import Kopf from "./Kopf.vue";
import ChatListElement from "./ChatListElement.vue"
import { mapState } from "vuex";

export default {
  components: {
    Kopf,
    ChatListElement
  },
  computed: {
    ...mapState(["chats"])
  }
};
</script>

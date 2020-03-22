<template>
  <b-list-group-item :to="chatRoute">
      <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ buddyName }}</h5>
      <small>3 days ago</small>
    </div>

    <p class="mb-1">
      {{ lastMessage }}
    </p>

    <small>Donec id elit non mi porta.</small>
  </b-list-group-item>
</template>
<script>
export default {
  name: "ChatListElement",
  props: {
    chat: {
      type: Object,
      required: true
    }
  },
  computed: {
      chatRoute() {
          return `chats/${this.chat.cid}`
      },
      buddyName() {
          const buddy = this.$store.state.buddies.find((element) => {
              return element.bid === this.chat.bid
          })
          if (buddy && buddy.name) {
              return buddy.name
          } else {
              return 'EMMA Buddy'
          }
      },
      lastMessage() {
          const messages = this.$store.state.chats.find((element) => {
              return element.cid === this.chat.cid
          })
          if (messages && messages.length) {
              return messages[messages.legth - 1].text
          } else {
              return ''
          }
      }
  }
};
</script>
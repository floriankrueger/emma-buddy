<template>
    <b-container fluid>
        {{ chat.cid }}
    </b-container>
</template>
<script>
export default {
    name: "Chat2",
    computed: {
        chat() {
            return this.$store.state.chats.find((element) => {
                return element.cid == this.$route.params.cid
            })
        }
    }
}
</script>
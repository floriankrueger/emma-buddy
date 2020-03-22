<template>
    <div class="Chat-body">
        <div v-for="message in messages" :key="message.id" class="message">
           <div v-if="message.senderId==userId" align="left">
               <div class="message-own">
                    <p>{{ message.sender }}</p>
                    <hr>
                    <p>{{ message.text }}</p>
               </div>
           </div>
           <div v-if="message.senderId!=userId" align="right">
               <div class="message-other">
                    <p>{{ message.sender }}</p>
                    <hr>
                    <p>{{ message.text }}</p>
               </div>
           </div>
        </div>
        <div>
            <input type="text">
            <button>Senden</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Chat',
    data() {
        return {
            messages: [
                {id: 0, senderId: 0, sender: 'Dr. Müller', text: 'Hallo, schönen Abend.'},
                {id: 1, senderId: 1, sender: 'Anonym', text: 'Hallo'},
                {id: 2, senderId: 0, sender: 'Dr. Müller', text: 'Wie kann ich helfen?'},
                {id: 3, senderId: 1, sender: 'Anonym', text: 'Ich weiß nicht...'},
                {id: 4, senderId: 1, sender: 'Anonym', text: 'Ich kann es nicht beschreiben'}
            ],
            userId: 1
        }
    }
}
</script>

<style scoped>
.Chat-body{
    background-color: white;
    width: 90%;
    margin: auto;
    border: solid darkgray;
}
.message{
    padding: 5px;
}
.message-own{
    background-color: rgba(5, 107, 5, 0.171);
    color: black;
    border-radius: 20px 20px 20px 0px;
    min-width: 30%;
    width:fit-content;
}
.message-own p{
    margin-left: 10px;
}
.message-own hr{
    width: 25%;
    margin-left: 3px;
}
.message-other{
    background-color: rgba(2, 2, 126, 0.151);
    color: black;
    width: auto;
    border-radius: 20px 20px 0px 20px;
    min-width: 30%;
    width: fit-content;
}
.message-other p{
    margin-right: 10px;
}
.message-other hr{
    width: 25%;
    margin-right: 3px;
}
</style>
<template>
    <div class="Aktuelles-body" id="meldungen">
        <div v-for="meldung in meldungen" :key="meldung.id" class="Aktuelles-item">
            <h1>{{ meldung.titel }}</h1>
            <p>{{ meldung.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Aktuelles',
    data(){
        return {
            meldungen: [
                {
                    id: 0,
                    titel: 'Lore Ipsum',
                    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
                },
                {
                    id: 1,
                    titel: 'Lore Schwipsum',
                    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +   
                        '\n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore'
                }
            ]
        }
    }
}
</script>

<style scoped>
.Aktuelles-body{
    background-color: gray;
    color: white;
}
.Aktuelles-item{
    margin: auto;
    text-align: center;
    width: 90%;
}
.Aktuelles-item h1{
    margin: auto;
    text-align: center;
    color: orange;
    width: 90%;
}
.Aktuelles-item p{
    margin: auto;
    text-align: center;
    color: black;
    background-color: white;
    width: 90%;
}
</style>
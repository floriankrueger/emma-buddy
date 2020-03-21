<template>
    <div>
        <div class=News>
            <div class="News-container" id="meldungen">
                <div v-for="meldung in blogPosts" :key="meldung.id" class="News-item">
                    <h2>{{ meldung.titel }}</h2>
                    <hr>
                    <p>{{ meldung.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'Aktuelles',
    computed:{
        ...mapState(['blogPosts'])
    }
}
</script>

<style scoped>
.News{
    background-color: white;
    font-family: cursive;
    width: 80%;
    margin: auto;
    border: solid gray;

}
.News-container{
    font-family:'Times New Roman', Times, serif;
    width: 90%;
    margin: auto;
}
.News-item{
    background-color: #29b1d069;
    font-family: inherit;
    font-size: medium;
    width: 75%;
    margin: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    border-radius: 20px;

}
.News-item hr{
    width: 90%;
    margin: auto;
}
.sticky{
    position: fixed;
    top: 0;
    width: 100%;
}
</style>
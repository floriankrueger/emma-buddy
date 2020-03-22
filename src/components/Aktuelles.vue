<template>
  <div>
    <Kopf
      assetName="news"
      assetBackground="#D8D8D8"
      title="Aktuelles"
      copy="Auf dieser Seite findest du regelmäßig neue Beiträge zu Themen wie Erziehung, Gesundheit oder Krisenbewältigung."
    ></Kopf>
    <div class="News">
      <div class="News-container" id="meldungen">
        <div class="News-item">
          <h1>Hilfe im Alltag f&uuml;r Eltern mit Kindern in der Corona-Krise</h1>
          <hr>
          <p>"Mama, was ist ein Corona-Virus und warum darf ich deshalb nicht raus?" Sicherlich stellen Dir auch Deine Kinder solche Fragen, die nicht in einem Satz zu beantworten sind, so dass es Dein Kind auch versteht. Schnell und gut erklärt findest Du unten diverse Informationen für Dich selbst als Elternteil als auch für Deine Kinder, damit auch Dein Alltag in der Krisenzeit so harmonisch wie möglich verläuft:</p>
          <p><a href="https://www.dksb.de/de/artikel/detail/hinweise-fuer-familien-in-der-corona-krise/">Hier geht’s zum Artikel</a></p>
          <br>
          <h2>Zusätzliche Erklärvideos für Kinder:</h2>
          <ul style="list-style: none">
            <li><a href="https://www.youtube.com/watch?v=GZnF8jBQrpw">ZDFtivi</a></li>
            <li><a href="https://www.youtube.com/watch?v=XO3UZ6CztvA">Eurac Research</a></li>
          </ul>
        </div>
        <div class="News-item">
          <h1>Manchmal geht alles drunter und drüber …</h1>
          <hr>
          <p>...und Du brauchst Hilfe, um wieder einen klaren, kühlen Kopf zu bekommen. In 10 Minuten geht die Welt nicht unter, aber 10 Minuten Meditieren mit einer App wie Calm oder Headspace kann Dir helfen, den Boden unter den Füßen wieder zu gewinnen. </p>
          <br>
          <h2>Wie? Das erfährst Du hier: <a href="https://www.calm.com/">Calm</a> und <a href="https://www.headspace.com/de">Headspace</a></h2>
        </div>
        <!--<div v-for="meldung in blogPosts" :key="meldung.id" class="News-item">
          <h2>{{ meldung.titel }}</h2>
          <hr />
          <p>{{ meldung.text }}</p>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import Kopf from './Kopf.vue'
/**import { mapState } from "vuex";*/

export default {
  name: "Aktuelles",
  /**computed: {
    ...mapState(["blogPosts"])
  },**/
  components: {
      Kopf
  }
};
</script>

<style scoped>
.News {
  background-color: white;
  font-family: cursive;
  width: 80%;
  margin: auto;
  border: solid gray;
  text-align: center;
   overflow-y: scroll;
   overflow-x: hidden;
   height: 67vh;
}
.News-container {
  font-family: "Times New Roman", Times, serif;
  width: 90%;
  margin: auto;
}
.News-item {
  background-color: #29b1d069;
  font-family: inherit;
  font-size: medium;
  width: 75%;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  border-radius: 20px;
  padding: 10px;
}
.News-item hr {
  width: 90%;
  margin: auto;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
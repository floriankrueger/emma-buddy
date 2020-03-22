<template>
  <b-container fluid>
    <Kopf
      assetName="compas"
      title="Karte"
      copy="In Zukunft wird hier eine Karte mit Hilfeeinrichtungen in deiner Gegend sein. Sie ist hier noch nicht, weil es keine unserer Prioritäten war, da in der Krise die meisten Einrichtungen geschlossen sind. Bitte habe Verständnis."
    ></Kopf>
  </b-container>
</template>
<script>
import Kopf from "./Kopf.vue";

export default {
  components: {
    Kopf
  }
};
</script>

<template>
  <b-container fluid class="kopf">
    <img :src="assetSrc" width="75" height="75" :style="imageBackgroundStyle" />
    <h1>{{ title }}</h1>
    <hr />
    <p v-if="hasCopy" class="copy">{{ copy }}</p>
  </b-container>
</template>
<script>
export default {
  name: "Kopf",
  props: {
    assetName: {
      type: String,
      required: true
    },
    assetBackground: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    copy: {
      type: String,
      required: false
    }
  },
  computed: {
    assetSrc() {
      return require(`../assets/${this.assetName}.svg`);
    },
    imageBackgroundStyle() {
      if (this.assetBackground) {
        return `background: ${this.assetBackground}; border-radius: 50%;`;
      } else {
        return "";
      }
    },
    hasCopy() {
      if (this.copy) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style scoped>
.kopf {
  text-align: center;
  padding: 60px;
}

.kopf h1 {
  margin-top: 10px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 16pt;
  letter-spacing: 0.1em;
  margin-bottom: 5px;
}

.kopf hr {
  margin-top: 5px;
  margin-bottom: 15px;
  border-color: #1dbd9b;
  width: 300px;
}

.kopf p.copy {
  color: #3d5065;
  font-family: "Lato", sans-serif;
  font-size: 12pt;
  margin-bottom: 30px;
}
</style>